import { User } from "@prisma";
import { Prisma } from "@prisma";

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
  findById(id: string): Promise<User | null>;
}