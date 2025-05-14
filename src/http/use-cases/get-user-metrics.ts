import type { CheckInsRepository } from "@/http/repositories/check-ins-repository";

interface Request {
  userId: string;
}

interface Response {
  checkInsCount: number;
}

export class GetUserMetricsUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({ userId }: Request): Promise<Response> {
    const checkInsCount = await this.checkInsRepository.countByUserId(userId);

    return {
      checkInsCount,
    };
  }
}
