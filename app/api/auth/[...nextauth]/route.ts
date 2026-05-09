// TODO: Replace with NextAuth.js + Google OAuth in Phase 2
// This file scaffolds the NextAuth API route but does not activate authentication.
// To activate:
//   1. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET in .env.local
//   2. Set NEXTAUTH_SECRET in .env.local (generate with: openssl rand -base64 32)
//   3. Set NEXTAUTH_URL=https://yourdomain.com in .env.local
//   4. Uncomment the code below and remove this comment block

/*
import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, user }) {
      return token
    },
  },
})

export { handler as GET, handler as POST }
*/

// Phase 1 placeholder — no-op handlers
export async function GET() {
  return new Response(
    JSON.stringify({ message: 'Auth not yet configured. See Phase 2 TODO.' }),
    { status: 501, headers: { 'Content-Type': 'application/json' } }
  )
}

export async function POST() {
  return new Response(
    JSON.stringify({ message: 'Auth not yet configured. See Phase 2 TODO.' }),
    { status: 501, headers: { 'Content-Type': 'application/json' } }
  )
}
