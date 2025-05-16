import { FastifyRequest, FastifyReply } from "fastify";
import { makeGetUserProfileUseCase } from "@/http/use-cases/factories/make-get-user-profile-use.case";

export const ProfileController = async (
  request: FastifyRequest,
  reply: FastifyReply
) => {
  await request.jwtVerify();

  const getUserProfileUseCase = makeGetUserProfileUseCase();

  const { user } = await getUserProfileUseCase.execute({
    userId: request.user.sub,
  });

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined,
    },
  });
};
