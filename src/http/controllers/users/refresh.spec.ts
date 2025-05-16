import request from "supertest";
import { app } from "@/app";
import { afterAll, beforeAll, describe, it, expect } from "vitest";

describe("Refresh controller", () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it("should be able to refresh a token", async () => {
    await request(app.server).post("/users").send({
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password",
    });

    const response = await request(app.server).post("/sessions").send({
      email: "john.doe@example.com",
      password: "password",
    });

    const cookies = response.get("Set-Cookie");

    if (!cookies) {
      throw new Error("No cookies found");
    }

    const refreshResponse = await request(app.server)
      .patch("/token/refresh")
      .set("Cookie", cookies)
      .send();

    expect(refreshResponse.statusCode).toBe(200);
    expect(refreshResponse.body).toEqual({
      token: expect.any(String),
    });

    expect(refreshResponse.get("Set-Cookie")).toEqual([
      expect.stringContaining("refreshToken"),
    ]);
  });
});
