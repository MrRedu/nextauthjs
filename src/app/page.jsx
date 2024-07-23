'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { Form } from './components/'

export default function HomePage() {
  const { data: session } = useSession()

  if (session) {
    redirect('/dashboard')
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        alignItems: 'center',
        margin: '0 auto',
      }}
    >
      <h2>{`LogIn`}</h2>
      <Form />
    </div>
  )
}
