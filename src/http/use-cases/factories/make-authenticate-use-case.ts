import { PrismaUsersRepository } from "@/http/repositories/prisma/users-repository";
import { AuthenticateUseCase } from "../authenticate";

export const makeAuthenticateUseCase = () => {
  const usersRepository = new PrismaUsersRepository();
  return new AuthenticateUseCase(usersRepository);
};
