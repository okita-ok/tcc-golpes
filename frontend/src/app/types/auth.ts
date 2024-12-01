export interface Auth {
  name: string;
  userType: "admin" | "user";
}

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  userTypeId: string;
  points: number;
}

export type SignUpDto = Pick<User, "name" | "email" | "password">;
export type LoginDto = Pick<User, "email" | "password">;
