import type { GymsRepository } from "@/http/repositories/gyms-repository";
import { GymAlreadyExistsError } from "./error/gym-already-exists-error";
import type { Gym } from "@prisma";

interface Request {
  title: string;
  description: string | null;
  phone: string | null;
  latitude: number;
  longitude: number;
}

interface Response {
  gym: Gym;
}

export class CreateGymUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    title,
    description,
    phone,
    latitude,
    longitude,
  }: Request): Promise<Response> {
    // const gymWithSameTitle = await this.gymsRepository.findByTitle(title);

    // if (gymWithSameTitle) throw new GymAlreadyExistsError();

    const gym = await this.gymsRepository.create({
      title,
      description,
      phone,
      latitude,
      longitude,
    });

    return {
      gym,
    };
  }
}
