import { redirect } from 'next/navigation'
import { isLoggedIn } from './utils/const'
import { Form } from './components/form/Form'
export default function HomePage() {
  if (isLoggedIn) {
    redirect('/dashboard')
  }

  return (
    <div>
      <h2>{`Iniciar sesión`}</h2>
      <Form />
    </div>
  )
}
