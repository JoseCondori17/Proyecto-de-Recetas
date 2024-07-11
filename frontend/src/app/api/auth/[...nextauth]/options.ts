import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { verifyLogin } from "@/features/auth/service/api"

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }
        const response = await verifyLogin({
          email: credentials.email,
          password: credentials.password,
        })

        if (response.ok) {
          return { id: response.data?.id.toString(), email: credentials.email }
        } else {
          console.log('login failed');
          return null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/sign-in',
    signOut: '/',
    newUser: '/auth/sign-up'
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = {
          id: token.id,
          name: session.user.name,
          email: session.user.email,
          image: '',
        };
      }
      return session
    }
  },  
  secret: process.env.NEXTAUTH_SECRET || 'sadnaonsindi23nda8s7dh832sadas',
}