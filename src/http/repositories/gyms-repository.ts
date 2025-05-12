import { Gym } from "@prisma";

export interface GymsRepository {
  findById(id: string): Promise<Gym | null>;
}
