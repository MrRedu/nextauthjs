'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Nav } from '../components'

export default function Layout({ children }) {
  const { data: session } = useSession()

  if (!session) {
    redirect('/')
  }

  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  )
}
