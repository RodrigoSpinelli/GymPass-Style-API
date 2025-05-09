import { PrismaClient } from "@prisma";
import { env } from "@/env";

export const prisma = new PrismaClient({
  log: env.NODE_ENV === "dev" ? ["query"] : [],
});
