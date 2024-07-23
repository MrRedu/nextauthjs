import { redirect } from 'next/navigation'
import { isLoggedIn } from './utils/const'
export default function HomePage() {
  if (isLoggedIn) {
    redirect('/dashboard')
  }

  return (
    <div>
      <h2>{`Iniciar sesión`}</h2>
      <form
        action=""
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '320px',
          margin: '0 auto',
        }}
      >
        <div
          style={{
            marginBottom: '.75rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label htmlFor="email">{`Correo electrónico`}</label>
          <input
            type="email"
            name="email"
            id="email"
            style={{ padding: '.5rem' }}
          />
        </div>
        <div
          style={{
            marginBottom: '.75rem',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <label htmlFor="password">{`Contraseña`}</label>
          <input
            type="password"
            name="password"
            id="password"
            style={{ padding: '.5rem' }}
          />
        </div>
        <button
          type="submit"
          style={{
            padding: '.5rem',
            border: 'none',
            cursor: 'pointer',
            width: '100%',
          }}
        >{`Iniciar sesión`}</button>
      </form>
    </div>
  )
}
