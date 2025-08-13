import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  //await prisma.user.deleteMany()
  // const users = await prisma.user.createMany({
  //   data: [
  //     { name: "Sarra", age: 29, email: "sarra@example1.com" },
  //     { name: "John", age: 20, email: "john@example1.com" },
  //   ],
  // })
  //await prisma.user.deleteMany(); 
  const users = await prisma.user.findMany({
    where: {
      name: "Sarra"
    },
    orderBy: {
      age: "desc",
    },
    take: 2,
    //skip: 1,
  });
  console.log(users);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
