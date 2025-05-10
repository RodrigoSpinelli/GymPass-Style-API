import { prisma } from "@/lib/prisma";
import { hash } from "bcryptjs";
import type { UsersRepository } from "@/http/repositories/users-repositoy";
import { UserAlreadyExistsError } from "./error/user-already-exists-error";

interface RegisterUseCaseRequest {
  name: string;
  email: string;
  password: string;
}

export class RegisterUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({ name, email, password }: RegisterUseCaseRequest) {
    const userWithSameEmail = await this.usersRepository.findByEmail(email);

    if (userWithSameEmail) throw new UserAlreadyExistsError();

    const password_hash = await hash(password, 6);

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    });
  }
}
