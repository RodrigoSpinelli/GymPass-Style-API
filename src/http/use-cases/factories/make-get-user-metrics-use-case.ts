import { PrismaCheckInsRepository } from "@/http/repositories/prisma/check-ins-repository";
import { GetUserMetricsUseCase } from "../get-user-metrics";

export const makeGetUserMetricsUseCase = () => {
  const checkInsRepository = new PrismaCheckInsRepository();
  return new GetUserMetricsUseCase(checkInsRepository);
};
