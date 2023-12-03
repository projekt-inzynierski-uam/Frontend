import { Flex, Button, TextInput, PasswordInput, Paper, Stack, Text, Group } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useId, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Paths } from '../../routes/paths'
import { toast } from 'react-toastify'

import '../../styles/Register.css'

const ENDPOINT = `${import.meta.env.VITE_DBSERVER}/signup`

type FormValues = {
    email: string,
    password: string,
    confirmPassword: string
  }

export const Register = () => {
  const emailInputId = useId()
  const passwordInputId = useId()
  const confirmPasswordInputId = useId()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.target as HTMLInputElement

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) return;
    event.preventDefault()

    if (formValues.password !== formValues.confirmPassword) {
      toast.error('Hasła się nie zgadzają')
      return;
    }
    
    try {
      setIsLoading(true)

      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(formValues)
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      navigate(Paths.LOGIN)
      toast.success('Konto zostało utworzone')
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Nieprawidłowy adres email'),
      password: (val) => (val.length <= 6 ? 'Hasło powinno zawierać przynajmniej 6 znaków' : null),
      confirmPassword: (val, values) => (val === values.password ? null : 'Passwords do not match'),
    },
  });

  return (
 
  <div class="login-form-container">
        
    <Paper 
      bg="rgb(233, 128, 116)"
      shadow="xs"
      radius="lg"
      p="xl"
    >
        <Stack
          h={290}
          w={250}
        >
          <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
          
            <TextInput
              required
              size="md"
              radius="lg"
              label="Adres email"
              id={emailInputId}
              placeholder="janusz@gmail.com"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Nieprawidłowy adres email'}
              styles={{ input: { backgroundColor: '#eae7dc', borderColor: 'red' }, label: { color: '#eae7dc', fontFamily: 'Oswald' } }}
            />

            <PasswordInput
              required
              size="md"
              radius="lg"
              label="Hasło"
              id={passwordInputId}
              placeholder="Hasło"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Hasło powinno zawierać przynajmniej 6 znaków'}
              styles={{ input: { backgroundColor: '#eae7dc', borderColor: 'red' }, label: { color: '#eae7dc', fontFamily: 'Oswald' } }}
            />

            <PasswordInput
              required
              size="md"
              radius="lg"
              label="Potwierdź hasło"
              id={confirmPasswordInputId}
              placeholder="Potwierdź hasło"
              value={form.values.confirmPassword}
              onChange={(event) => form.setFieldValue('confirmPassword', event.currentTarget.value)}
              error={form.errors.password && 'Hasło powinno zawierać przynajmniej 6 znaków'}
              styles={{ input: { backgroundColor: '#eae7dc', borderColor: 'red' }, label: { color: '#eae7dc', fontFamily: 'Oswald' } }}
            />

            <br />
              <Button type="submit" fullWidth variant="filled" color="#8e8d8a" size="md" radius="lg" disabled={isLoading}>{isLoading ? 'Ładowanie...' : 'Zarejestruj się'}</Button>

            <Text
            style={{ fontFamily: 'Oswald' }}
            color="#eae7dc"
            >
              Masz już konto? <Link to={Paths.LOGIN} style={{textDecoration: 'none', color: '#eae7dc', fontFamily: 'Oswald' }} > Zaloguj się </Link>
            </Text>
          </form>
        </Stack>
      </Paper>
  </div>

  )
}