import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextAuth.js',
  description: 'NextAuth.js example project',
}

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  return (
    <Providers session={session}>
      <html lang="es">
        <body className={inter.className}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '2rem 4rem',
            }}
          >
            {children}
          </div>
        </body>
      </html>
    </Providers>
  )
}
