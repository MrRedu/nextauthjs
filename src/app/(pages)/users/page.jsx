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
  console.log({ data })

  return (
    <>
      <h1>{`</UsersPage>`}</h1>
      <ul>
        {data.map(user => (
          <li>
            <ul>
              <li>{user.id_user}</li>
              <li>{user.email_user}</li>
              <li>{user.password_user}</li>
              <li>{user.fullname_user}</li>
              <li>{user.id_rol}</li>
              <li>{`${new Date(user.created_at)}`}</li>
              <li>{`${new Date(user.updated_at)}`}</li>
            </ul>
          </li>
        ))}
      </ul>
    </>
  )
}
