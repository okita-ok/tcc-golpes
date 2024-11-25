import { PrismaClient, Usuario } from "@prisma/client";

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<Usuario[] | null> => {
  const users = await prisma.usuario.findMany();
  return users;
};
