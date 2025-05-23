import { Prisma, User } from "@prisma";
import { UsersRepository } from "../users-repositoy";
import { randomUUID } from "node:crypto";
export class InMemoryUsersRepository implements UsersRepository {
  public items: User[] = [];

  async create(data: Prisma.UserCreateInput): Promise<User> {
    const user = {
      id: randomUUID(),
      name: data.name,
      email: data.email,
      password_hash: data.password_hash,
      created_at: new Date(),
    };

    this.items.push(user);

    return user;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = this.items.find((user) => user.email === email);

    return user ?? null;
  }

  async findById(id: string): Promise<User | null> {
    const user = this.items.find((user) => user.id === id);

    return user ?? null;
  }
}
