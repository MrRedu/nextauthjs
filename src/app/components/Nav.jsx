'use client'

import Link from 'next/link'
import { signOut } from 'next-auth/react'

export const Nav = () => {
  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '2rem',
      }}
    >
      <ul
        style={{
          display: 'flex',
          gap: '1rem',
          listStyle: 'none',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/help">Help</Link>
        </li>
      </ul>
      <button onClick={signOut}>Sign Out</button>
    </nav>
  )
}
