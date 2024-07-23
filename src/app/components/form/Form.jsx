'use client'
import { useState } from 'react'
import { Input } from './Input'
import { InputGroup } from './InputGroup'
import { Label } from './Label'
import { signIn } from 'next-auth/react'

const initialValueFormData = {
  email: '',
  password: '',
}

export const Form = () => {
  const [formData, setFormData] = useState(initialValueFormData)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async event => {
    event.preventDefault()
    if (!formData.email || !formData.password) {
      alert('Must provide all the credentials.')
    }

    try {
      setLoading(true)
      const response = await signIn('credentials', {
        redirect: false,
        email: formData.email,
        password: formData.password,
      })

      if (response.error) {
        setError(response.error)
        return
      }
    } catch (error) {
      setError(error)
      console.error(error)
    } finally {
      setLoading(false)
    }
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
        width: '320px',
        margin: '0 auto',
      }}
    >
      <InputGroup>
        <Label htmlFor="email">{`E-mail`}</Label>
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
        <Label htmlFor="password">{`Password`}</Label>
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
        disabled={loading}
      >
        {`Log In`} {loading ? '...' : ''}
      </button>
      {error ? <p style={{ color: 'red' }}>{error}</p> : null}
    </form>
  )
}
