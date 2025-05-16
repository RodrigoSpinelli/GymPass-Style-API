import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, it, expect } from "vitest";
import { createAndAuthenticateUser } from "@/utils/test/create-and-authenticate-user";
import { prisma } from "@/lib/prisma";

describe("Metrics of check-ins controller", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to list the metrics of check-ins", async () => {
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

    await prisma.checkIn.createMany({
      data: [
        {
          gym_id: gym.id,
          user_id: user.id,
        },
        {
          gym_id: gym.id,
          user_id: user.id,
        },
      ],
    });

    const metricsResponse = await request(app.server)
      .get("/check-ins/metrics")
      .set("Authorization", `Bearer ${token}`)

    expect(metricsResponse.statusCode).toBe(200);
    expect(metricsResponse.body.checkInsCount).toEqual(2);
  });
});
