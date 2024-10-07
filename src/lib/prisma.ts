// src/lib/prisma.ts
import { PrismaClient } from "@prisma/client";

// Add `PrismaClient` to the NodeJS global type, to prevent multiple instances in development
declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({
  log: ['query'],  // Optionally log all queries to the console
});

if (process.env.NODE_ENV !== 'production') global.prisma = prisma;

export default prisma;
