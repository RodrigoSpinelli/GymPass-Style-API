import { it, expect, describe, beforeEach } from "vitest";
import { ResourceNotFoundError } from "./error/resource-not-found-error";
import { InMemoryCheckInsRepository } from "../repositories/in-memory/check-ins-repositorys";
import { CheckInUseCase } from "./check-in";

let checkInsRepository: InMemoryCheckInsRepository;
let sut: CheckInUseCase;

describe("Check-in use case", () => {
  beforeEach(() => {
    checkInsRepository = new InMemoryCheckInsRepository();
    sut = new CheckInUseCase(checkInsRepository);
  });

  it("should be able to check in", async () => {
    // const createdGym = await checkInsRepository.create({
    //   gym_id: "gym-01",
    //   user_id: "user-01",
    // });

    const { checkIn } = await sut.execute({
      gymId: "gym-01",
      userId: "user-01",
    });

    expect(checkIn.id).toEqual(expect.any(String));
  });
});
