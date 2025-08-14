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
  // const preference = await prisma.userPreference.create({
  //   data: {
  //     emailUpdates: true,
  //   }
  // }) 
  // console.log(preference);
  // const users = await prisma.user.update({
  //   where: {
  //     email: "john@example1.com"
  //   },
  //   data: {
  //     userPreference: {
  //       connect: {
  //         id: "772ca761-78e8-4bed-ab2d-99e03526d302"
  //       }
  //     }
  //   },
  //   include: {
  //     userPreference: {
  //       select: {
  //         emailUpdates: true
  //       }
  //     }
  //   }
  // });
  // const users = await prisma.user.findFirst({
  //   where: {
  //     name: "John"
  //   },
  //   include: {
  //     userPreference: {
  //       select: {
  //         emailUpdates: true
  //       }
  //     }
  //   },
  // })
  const users = await prisma.user.deleteMany({
    where: {
      age: {gt: 20}
    }
  })
  console.log(users);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
