import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaPg } from "@prisma/adapter-pg"
import { PrismaClient } from "./src/generated/prisma/client"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined")
}

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [GitHub],
  session: { strategy: "database" },
  pages: {
    signIn: "/login",
  },
})