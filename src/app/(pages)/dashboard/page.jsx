'use client'
import { useSession } from 'next-auth/react'

export default function DashboardPage() {
  const { data: session } = useSession()

  return (
    <>
      <h2>{`</DashboardPage>`}</h2>
      <div>
        <h3>{`My info`}</h3>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>
    </>
  )
}
