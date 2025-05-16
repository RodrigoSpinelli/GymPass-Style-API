import { PrismaGymsRepository } from "@/repositories/prisma/gyms-repository";
import { FetchNearbyGymsUseCase } from "../fetch-nearby-gyms";

export const makeFetchNearbyGymsUseCase = () => {
  const gymsRepository = new PrismaGymsRepository();
  return new FetchNearbyGymsUseCase(gymsRepository);
};
