import { Gym } from "@prisma";
import { GymsRepository } from "../repositories/gyms-repository";

interface Request {
  query: string;
  page: number;
}

interface Response {
  gyms: Gym[];
}

export class SearchGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({ query, page }: Request): Promise<Response> {
    const gyms = await this.gymsRepository.searchMany(query, page);

    return {
      gyms,
    };
  }
}
