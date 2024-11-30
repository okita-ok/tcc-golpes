import { CompletedUnit, PrismaClient, Unit } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUnits = async (): Promise<Unit[] | null> => {
  const units = await prisma.unit.findMany();
  return units;
};

export const getAllCompletedUnits = async (
  userId: string
): Promise<CompletedUnit[] | null> => {
  const completed = await prisma.completedUnit.findMany({ where: { userId } });
  return completed;
};

export const getCompletedUnit = async (
  userId: string,
  unitId: string
): Promise<CompletedUnit | null> => {
  const completedUnit = await prisma.completedUnit.findUnique({
    where: {
      userId_unitId: {
        userId,
        unitId,
      },
    },
  });
  return completedUnit;
};

export const setUnitAsCompleted = async (
  userId: string,
  unitId: string
): Promise<CompletedUnit | null> => {
  const [completedUnit] = await prisma.$transaction([
    prisma.completedUnit.upsert({
      where: {
        userId_unitId: {
          userId,
          unitId,
        },
      },
      update: {
        completed: true,
        completedAt: new Date(),
      },
      create: {
        userId,
        unitId,
        completed: true,
      },
    }),

    prisma.user.update({
      where: { id: userId },
      data: {
        points: {
          increment: 100,
        },
      },
    }),
  ]);
  return completedUnit;
};
