import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

export const dynamic = 'force-dynamic';

const prisma = new PrismaClient();

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
  debug: true,
};

export const POST = async (req: any, res: any) => {
  return NextAuth(req, res, authOptions);
};

// Handle GET method for sessions
export const GET = async (req: any, res: any) => {
  return NextAuth(req, res, authOptions);
};
