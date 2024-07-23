import Link from 'next/link'

export const Nav = () => {
  return (
    <nav>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li>
          <Link href="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link href="/help">Help</Link>
        </li>
      </ul>
    </nav>
  )
}
