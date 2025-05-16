import { PrismaUsersRepository } from "@/repositories/prisma/users-repository";
import { AuthenticateUseCase } from "../authenticate";

export const makeAuthenticateUseCase = () => {
  const usersRepository = new PrismaUsersRepository();
  return new AuthenticateUseCase(usersRepository);
};
