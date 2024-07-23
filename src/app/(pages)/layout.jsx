import { redirect } from 'next/navigation'
import { Nav } from '../components'
import { isLoggedIn } from '../utils/const'

export default function Layout({ children }) {
  if (!isLoggedIn) {
    redirect('/')
  }

  return (
    <>
      <Nav />
      <main style={{ minHeight: 'calc(60vh)' }}>{children}</main>
    </>
  )
}
