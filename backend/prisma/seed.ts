import { PrismaClient } from "@prisma/client";
import { UserTypes } from "../src/resources/userType/userType.constants";

const prisma = new PrismaClient();

async function main() {
  await prisma.userType.createMany({
    data: [
      { id: UserTypes.ADMIN, label: "admin" },
      { id: UserTypes.USER, label: "user" },
    ],
    skipDuplicates: true,
  });

  await prisma.unit.createMany({
    data: [
      { title: "Unidade 1" },
      { title: "Unidade 2" },
      { title: "Unidade 3" },
    ],
    skipDuplicates: true,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
  });
