import { it, expect, describe, beforeEach } from "vitest";
import { InMemoryGymsRepository } from "../repositories/in-memory/gyms-repositorys";
import { CreateGymUseCase } from "./create-gym";

let gymsRepository: InMemoryGymsRepository;
let sut: CreateGymUseCase;

describe("Create gym use case", () => {
  beforeEach(() => {
    gymsRepository = new InMemoryGymsRepository();
    sut = new CreateGymUseCase(gymsRepository);
  });

  it("should be able to create gym", async () => {
    const { gym } = await sut.execute({
      title: "Gym 1",
      description: "Gym 1 description",
      phone: "123456",
      latitude: 123,
      longitude: 123,
    });

    expect(gym.id).toEqual(expect.any(String));
  });
});
