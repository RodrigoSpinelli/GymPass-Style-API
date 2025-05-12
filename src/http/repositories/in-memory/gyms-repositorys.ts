import type { GymsRepository } from "../gyms-repository";
import { Gym, Prisma } from "@prisma";

export class InMemoryGymsRepository implements GymsRepository {
  public items: Gym[] = [];

  async findById(id: string) {
    const gym = this.items.find((gym) => gym.id === id);

    return gym ?? null;
  }
}