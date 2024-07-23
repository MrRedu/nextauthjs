'use client'
import { useState } from 'react'
import { Input } from './Input'
import { InputGroup } from './InputGroup'
import { Label } from './Label'

const initialValueFormData = {
  email: '',
  password: '',
}

export const Form = () => {
  const [formData, setFormData] = useState(initialValueFormData)

  const handleSubmit = async event => {
    event.preventDefault()
    console.log(formData)
  }

  const handleChange = e => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '320px',
        margin: '0 auto',
      }}
    >
      <InputGroup>
        <Label htmlFor="email">{`Correo electrónico`}</Label>
        <Input
          type="email"
          name="email"
          id="email"
          style={{ padding: '.5rem' }}
          onChange={handleChange}
          value={formData.email}
        />
      </InputGroup>
      <InputGroup
        style={{
          marginBottom: '.75rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Label htmlFor="password">{`Contraseña`}</Label>
        <Input
          type="password"
          name="password"
          id="password"
          style={{ padding: '.5rem' }}
          onChange={handleChange}
          value={formData.password}
        />
      </InputGroup>
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
  )
}
