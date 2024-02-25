import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const allUsers = await prisma.users.findMany();
  console.log(allUsers);
};

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

export default prisma;
