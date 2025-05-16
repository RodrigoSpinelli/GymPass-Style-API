import type { CheckInsRepository } from "@/repositories/check-ins-repository";
import { CheckIn } from "@prisma";

interface Request {
  userId: string;
  page: number;
}

interface Response {
  checkIns: CheckIn[];
}

export class FetchUserCheckInsHistoryUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({ userId, page }: Request): Promise<Response> {
    const checkIns = await this.checkInsRepository.findManyByUserId(userId, page);

    return {
      checkIns,
    };
  }
}
