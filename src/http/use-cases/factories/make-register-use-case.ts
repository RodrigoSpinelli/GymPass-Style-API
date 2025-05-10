import { PrismaUsersRepository } from "@/http/repositories/prisma/users-repository";
import { RegisterUseCase } from "../register";

export const makeRegisterUseCase = () => {
  const usersRepository = new PrismaUsersRepository();
  return new RegisterUseCase(usersRepository);
};