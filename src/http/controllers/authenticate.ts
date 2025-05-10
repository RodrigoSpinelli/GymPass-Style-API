import { z } from "zod";
import { FastifyRequest, FastifyReply } from "fastify";
import { InvalidCredentialsError } from "../use-cases/error/invalid-credentials-error";
import { makeAuthenticateUseCase } from "@/http/use-cases/factories/make-authenticate-use-case";

export const AuthenticateController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = authenticateBodySchema.parse(request.body);

  const authenticateUseCase = makeAuthenticateUseCase();

  try {
    await authenticateUseCase.execute({ email, password });
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message });
    }
    throw error;
  }

  return reply.status(200).send({
    message: "User authenticated",
  });
};
