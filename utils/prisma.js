import { PrismaClient } from "@prisma/client";

let prisma = new PrismaClient();
let isProd = process.env.NODE_ENV === "production";

//EXPERIMENTAL: If it's not in production, disconnect and use global var instead.
if (!isProd) {
  prisma.$disconnect();
  if (!global.prisma) {
    global.prisma = new PrismaClient();
  }
  prisma = global.prisma;
}

export default prisma;
