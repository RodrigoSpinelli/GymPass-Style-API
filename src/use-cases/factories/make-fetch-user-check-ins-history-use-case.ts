import { PrismaCheckInsRepository } from "@/repositories/prisma/check-ins-repository";
import { FetchUserCheckInsHistoryUseCase } from "../fetch-user-check-ins-history";

export const makeFetchUserCheckInsHistoryUseCase = () => {
  const checkInsRepository = new PrismaCheckInsRepository();
  return new FetchUserCheckInsHistoryUseCase(checkInsRepository);
};
