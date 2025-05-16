import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, it, expect, vi } from "vitest";
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user";
import { prisma } from "@/lib/prisma";

describe("Validate check-in controller", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to validate a check-in", async () => {
    const { token } = await createAndAuthenticateUser(app);

    const gym = await prisma.gym.create({
      data: {
        title: "JavaScript Gym",
        description: "Gym description",
        phone: "1234567890",
        latitude: -27.2092052,
        longitude: -49.6401091,
      },
    });

    const user = await prisma.user.findFirstOrThrow();

    const checkIn = await prisma.checkIn.create({
      data: {
        gym_id: gym.id,
        user_id: user.id,
      },
    });

    const profileResponse = await request(app.server)
      .patch(`/check-ins/${checkIn.id}/validate`)
      .set("Authorization", `Bearer ${token}`)
      .send();

    expect(profileResponse.statusCode).toBe(204);

    const updatedCheckIn = await prisma.checkIn.findUniqueOrThrow({
      where: {
        id: checkIn.id,
      },
    });

    expect(updatedCheckIn.validated_at).toEqual(expect.any(Date));
  });
});
