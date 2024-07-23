import CredentialsProvider from 'next-auth/providers/credentials'
import NextAuth from 'next-auth/next'

async function login(credentials) {
  try {
    const response = await fetch(
      `http://localhost:3000/api/users/${credentials.email}`
    )

    if (!response.ok) {
      throw new Error('Wrong credentials')
    }

    // VALIDATION WITH BCRYPT | PLEASE IMPLEMENT
    // const isPasswordValid = await bcrypt.compare(credentials.password,response.password_user)
    const isPasswordValid = true

    if (!isPasswordValid) {
      throw new Error('Wrong credentials')
    }

    return response.json()
  } catch (error) {
    console.error('Error while logging in: ', error)
    throw new Error('Something went wrong')
  }
}

export const authOptions = {
  pages: {
    signIn: '/',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials, req) {
        try {
          const { data } = await login(credentials)
          return data
        } catch (error) {
          throw new Error('Credentials not valid')
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id_user = user.id_user
        token.email = user.email_user
        token.name = user.fullname_user
        token.id_rol = user.id_rol
      }
      return token
    },
    async session({ session, token }) {
      if (token) {
        session.user.id_user = token.id_user
        session.user.email = token.email
        session.user.name = token.name
        session.user.id_rol = token.id_rol
      }
      return session
    },
  },
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
