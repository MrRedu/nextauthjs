import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NextAuth.js',
  description: 'NextAuth.js example project',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div
          style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem 4rem' }}
        >
          {children}
        </div>
      </body>
    </html>
  )
}
