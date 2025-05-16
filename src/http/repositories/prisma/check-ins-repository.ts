import { CheckIn, Prisma } from "@prisma";
import { prisma } from "@/lib/prisma";
import { CheckInsRepository } from "../check-ins-repository";
import dayjs from "dayjs";

export class PrismaCheckInsRepository implements CheckInsRepository {
  async countByUserId(userId: string) {
    const checkIns = await prisma.checkIn.count({
      where: {
        user_id: userId,
      },
    });
    return checkIns;
  }
  async findManyByUserId(userId: string, page: number) {
    const checkIns = await prisma.checkIn.findMany({
      where: {
        user_id: userId,
      },
      take: 20,
      skip: (page - 1) * 20,
    });
    return checkIns;
  }
  async findByUserIdOnDate(userId: string, date: Date) {
    const startOfTheDay = dayjs(date).startOf("day").toDate();
    const endOfTheDay = dayjs(date).endOf("day").toDate();
    
    const checkIn = await prisma.checkIn.findFirst({
      where: {
        user_id: userId,
        created_at: {
          gte: startOfTheDay,
          lte: endOfTheDay,
        },
      },
    });
    return checkIn;
  }
  async create(data: Prisma.CheckInUncheckedCreateInput) {
    const checkIn = await prisma.checkIn.create({
      data,
    });
    return checkIn;
  }
  async findById(id: string) {
    const checkIn = await prisma.checkIn.findUnique({
      where: { id },
    });
    return checkIn;
  }
  async save(data: CheckIn) {
    const updatedCheckIn = await prisma.checkIn.update({
      where: { id: data.id },
      data,
    });
    return updatedCheckIn;
  }
}
