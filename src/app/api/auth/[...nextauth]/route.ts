import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

// Ensure this API route is treated as dynamic
export const dynamic = 'force-dynamic';

// Logging environment variables to verify they are available during build
console.log("GOOGLE_ID:", process.env.GOOGLE_ID || "Not set");
console.log("GOOGLE_SECRET:", process.env.GOOGLE_SECRET || "Not set");
console.log("NEXTAUTH_SECRET:", process.env.NEXTAUTH_SECRET || "Not set");
console.log("DATABASE_URL:", process.env.DATABASE_URL || "Not set");

let prisma: PrismaClient;
try {
  prisma = new PrismaClient();
  console.log("Prisma Client initialized successfully");
} catch (error) {
  console.error("Prisma connection error:", error);
}

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID || 'fallback-google-client-id',
      clientSecret: process.env.GOOGLE_SECRET || 'fallback-google-client-secret',
    }),
  ],
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXTAUTH_SECRET || 'fallback-nextauth-secret',
  session: {
    strategy: 'jwt' as const,
  },
  callbacks: {
    async jwt({ token, user }: { token: any; user?: any }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: { session: any; token: any }) {
      if (token && session.user) {
        session.user.id = token.id;
      }
      return session;
    },
  },
};

// Export the POST method to handle authentication
export const POST = NextAuth(authOptions);
