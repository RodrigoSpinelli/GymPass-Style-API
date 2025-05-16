import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, it, expect } from "vitest";

describe("Profile controller", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to get user profile", async () => {
    await request(app.server).post("/users").send({
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password",
    });

    const authenticateResponse = await request(app.server)
      .post("/sessions")
      .send({
        email: "john.doe@example.com",
        password: "password",
      });

    const { token } = authenticateResponse.body;

    const profileResponse = await request(app.server)
      .get("/me")
      .set("Authorization", `Bearer ${token}`);

    expect(profileResponse.statusCode).toBe(200);
    expect(profileResponse.body.user).toEqual(
      expect.objectContaining({
        email: "john.doe@example.com",
      })
    );
  });
});
