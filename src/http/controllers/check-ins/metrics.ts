import { makeGetUserMetricsUseCase } from "@/use-cases/factories/make-get-user-metrics-use-case";
import { FastifyRequest, FastifyReply } from "fastify";

export async function MetricsCheckInsController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  const metricsCheckInsUseCase = makeGetUserMetricsUseCase();

  const { checkInsCount } = await metricsCheckInsUseCase.execute({
    userId: request.user.sub,
  });

  return reply.status(200).send({ checkInsCount });
}
