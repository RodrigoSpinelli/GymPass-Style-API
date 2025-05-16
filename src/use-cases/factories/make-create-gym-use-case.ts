import { PrismaGymsRepository } from "@/repositories/prisma/gyms-repository";
import { CreateGymUseCase } from "../create-gym";

export const makeCreateGymUseCase = () => {
  const gymsRepository = new PrismaGymsRepository();
  return new CreateGymUseCase(gymsRepository);
};
