import request from "supertest";
import { FastifyInstance } from "fastify";
import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
export async function createAndAuthenticateUser(app: FastifyInstance, isAdmin = false) {
  const user = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john.doe@example.com",
      password_hash: await hash("123456", 6),
      role: isAdmin ? "ADMIN" : "MEMBER",
    },
  });


  const authenticateResponse = await request(app.server)
    .post("/sessions")
    .send({
      email: "john.doe@example.com",
      password: "123456",
    });

  const { token } = authenticateResponse.body;

  return { token };
}
