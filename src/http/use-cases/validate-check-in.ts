import { CheckIn } from "@prisma";
import { CheckInsRepository } from "../repositories/check-ins-repository";
import { ResourceNotFoundError } from "@/http/use-cases/error/resource-not-found-error";
import { differenceInMinutes } from "date-fns";
import { LateCheckInValidationError } from "@/http/use-cases/error/late-check-in-validation-error";
interface Request {
  checkInId: string;
}

interface Response {
  checkIn: CheckIn;
}

export class ValidateCheckInUseCase {
  constructor(private checkInsRepository: CheckInsRepository) {}

  async execute({ checkInId }: Request): Promise<Response> {
    const checkIn = await this.checkInsRepository.findById(checkInId);

    if (!checkIn) {
      throw new ResourceNotFoundError();
    }

    const distanceInMinutesFromCheckInCreation = differenceInMinutes(
      new Date(),
      checkIn.created_at
    );

    if (distanceInMinutesFromCheckInCreation > 20) {
      throw new LateCheckInValidationError();
    }

    checkIn.validated_at = new Date();

    await this.checkInsRepository.save(checkIn);

    return {
      checkIn,
    };
  }
}
