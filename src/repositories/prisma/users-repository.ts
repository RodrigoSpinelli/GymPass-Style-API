import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma";
import { UsersRepository } from "../users-repositoy";

export class PrismaUsersRepository implements UsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const newUser = await prisma.user.create({
      data,
    });
    return newUser;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({
      where: { email },
    });
    return user;
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({
      where: { id },
    });
    return user;
  }
}
