import { PrismaCheckInsRepository } from "@/http/repositories/prisma/check-ins-repository";
import { CheckInUseCase } from "../check-in";
import { PrismaGymsRepository } from "@/http/repositories/prisma/gyms-repository";
export const makeCheckInUseCase = () => {
  const checkInsRepository = new PrismaCheckInsRepository();
  const gymsRepository = new PrismaGymsRepository();
  return new CheckInUseCase(checkInsRepository, gymsRepository);
};
