const loadUsers = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/users')
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export default async function UsersPage() {
  const { data } = await loadUsers()

  return (
    <>
      <h2>{`</UsersPage>`}</h2>
      <ul>
        {data.map(user => (
          <li>
            <ul>
              <li>
                ID: <span style={{ color: '#c6c1c2' }}>{user.id_user}</span>
              </li>
              <li>
                EMAIL:{' '}
                <span style={{ color: '#c6c1c2' }}>{user.email_user}</span>
              </li>
              <li>
                PASSWORD:{' '}
                <span style={{ color: '#c6c1c2' }}>{user.password_user}</span>
              </li>
              <li>
                FULLNAME:{' '}
                <span style={{ color: '#c6c1c2' }}>{user.fullname_user}</span>
              </li>
              <li>
                ID_ROL: <span style={{ color: '#c6c1c2' }}>{user.id_rol}</span>
              </li>
              <li>
                CREATED_AT:{' '}
                <span
                  style={{ color: '#c6c1c2' }}
                >{`${new Date(user.created_at)}`}</span>
              </li>
              <li>
                UPDATED_AT:{' '}
                <span
                  style={{ color: '#c6c1c2' }}
                >{`${new Date(user.updated_at)}`}</span>
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}
