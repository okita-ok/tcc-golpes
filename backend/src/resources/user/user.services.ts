import { PrismaClient, User } from "@prisma/client";
import { genSalt, hash } from "bcryptjs";
import { CreateUserDto, UpdateUserDto, UserDto } from "./user.types";

const prisma = new PrismaClient();

export const getAllUsers = async (): Promise<UserDto[] | null> => {
  const users = await prisma.user.findMany();
  return users.map((u) => {
    const { password, ...userWithoutPassword } = u;
    return userWithoutPassword;
  });
};

export const findUserbyEmail = async (email: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { email } });
  return user;
};

export const createUser = async (user: CreateUserDto): Promise<User> => {
  const salt = await genSalt();
  const password = await hash(user.password, salt);
  return prisma.user.create({ data: { ...user, password } });
};

export const getUser = async (id: string): Promise<User | null> => {
  const user = await prisma.user.findUnique({ where: { id } });
  return user;
};

export const updateUser = async (
  id: string,
  updatedData: UpdateUserDto
): Promise<User | null> => {
  const salt = await genSalt();
  const password = await hash(updatedData.password, salt);
  const updatedUser = await prisma.user.update({
    where: { id: id },
    data: { ...updatedData, password },
  });
  return updatedUser;
};

export const removeUser = async (id: string): Promise<User | null> => {
  return prisma.user.delete({ where: { id } });
};
