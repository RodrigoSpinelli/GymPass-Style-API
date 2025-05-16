import { PrismaCheckInsRepository } from "@/http/repositories/prisma/check-ins-repository";
import { ValidateCheckInUseCase } from "../validate-check-in";

export const makeValidateCheckInUseCase = () => {
  const checkInsRepository = new PrismaCheckInsRepository();
  return new ValidateCheckInUseCase(checkInsRepository);
};
