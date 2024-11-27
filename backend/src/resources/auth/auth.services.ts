import { User } from "@prisma/client";
import { LoginDto } from "./auth.types";
import { findUserbyEmail } from "../user/user.services";
import { compare } from "bcryptjs";

export const checkCredentials = async (
  credentials: LoginDto
): Promise<User | null> => {
  const user = await findUserbyEmail(credentials.email);
  if (!user) return null;
  const ok = await compare(credentials.password, user.password);
  if (ok) return user;
  return null;
};
