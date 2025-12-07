import "dotenv/config";
import { PrismaClient } from "../prisma/client/client.ts";

const connectionString = process.env.DATABASE_URL;

//Postgres
import { PrismaPg } from "@prisma/adapter-pg";
const adapter = new PrismaPg({ connectionString });

//MySQL
/*
 * 1. Comment Postgres setup above
 * 2. Change provider in `/prisma/schema.prisma` to provider = "mysql"
 * 3. Install MySQL driver for Prisma and uninstall Postgres:
 *   `npm install @prisma/adapter-mariadb; npm uninstall pg @prisma/adapter-pg`
 * OR
 *   `bun install @prisma/adapter-mariadb; bun uninstall pg @prisma/adapter-pg`
 */

// const regex = /^mysql:\/\/([^:]+):([^@]*)@([^:]+):(\d+)\/(.+)$/;
// const match = connectionString.match(regex);
// if (!match) {
//   throw new Error("Invalid DATABASE_URL");
// }

// const [, user, password, host, port, database] = match;

// const adapter = new PrismaMariaDb({
//   user,
//   password,
//   database,
//   host,
//   port: Number(port),
//   connectionLimit: 5, //adjust this if necessary
// });

/** @type {PrismaClient} */
const prisma = new PrismaClient({ adapter });

export default prisma;
