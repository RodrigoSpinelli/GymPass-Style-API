import { PrismaUsersRepository } from "@/repositories/prisma/users-repository";
import { GetUserProfileUseCase } from "../get-user-profile";

export const makeGetUserProfileUseCase = () => {
  const usersRepository = new PrismaUsersRepository();
  return new GetUserProfileUseCase(usersRepository);
};
