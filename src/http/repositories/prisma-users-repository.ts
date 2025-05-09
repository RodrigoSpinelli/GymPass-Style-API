import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma";

export class PrismaUsersRepository {
  async create(data: Prisma.UserCreateInput) {
    const newUser = await prisma.user.create({
      data,
    });
    return newUser;
  }
}
