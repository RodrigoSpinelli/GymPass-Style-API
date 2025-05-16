import { PrismaGymsRepository } from "@/http/repositories/prisma/gyms-repository";
import { SearchGymsUseCase } from "../search-gyms";

export const makeSearchGymsUseCase = () => {
  const gymsRepository = new PrismaGymsRepository();
  return new SearchGymsUseCase(gymsRepository);
};
