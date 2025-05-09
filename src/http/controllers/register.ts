import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { RegisterUseCase } from "../use-cases/register";

export const RegisterController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const createUserBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { name, email, password } = createUserBodySchema.parse(request.body);

  try {
    await RegisterUseCase({ name, email, password });
  } catch (error) {
    return reply.status(400).send();
  }

  return reply.status(201).send({
    message: "User created",
  });
};
