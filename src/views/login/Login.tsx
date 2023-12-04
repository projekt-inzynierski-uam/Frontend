import { useId, useState } from 'react'
import '../../styles/Login.css'
import { useNavigate, Link } from 'react-router-dom'
import { Button, TextInput, PasswordInput, Paper, Stack, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

import { Paths } from '../../routes/paths'
import { CookieName } from '../../lib/constants/cookies'
import { removeAllCookies } from '../../lib/constants/helpers/removeAllCookies'

const ENDPOINT = `${import.meta.env.VITE_DBSERVER}/login`

type Response = {
  token: string
  email: string
}

export const Login = () => {
  const emailInputId = useId()
  const passwordInputId = useId()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (val) => (val.length <= 6 ? 'Hasło powinno zawierać przynajmniej 6 znaków' : null),
    },
  })

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) return
    event.preventDefault()

    try {
      removeAllCookies()
      setIsLoading(true)

      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(form.values),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      const data: Response = await response.json()

      Cookies.set(CookieName.AUTH_TOKEN, data.token)
      Cookies.set(CookieName.EMAIL, data.email)

      navigate(Paths.DASHBOARD)
      toast.success('Zalogowano')
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-form-container">
      <Paper bg="rgb(233, 128, 116)" shadow="xs" radius="lg" p="xl">
        <Stack h={270} w={250}>
          <form onSubmit={handleOnSubmit}>
            <TextInput
              required
              size="md"
              radius="lg"
              label="Adres email"
              id={emailInputId}
              placeholder="janusz@gmail.com"
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.target.value)}
              error={form.errors.email && 'Nieprawidłowy adres email'}
              styles={{
                input: { backgroundColor: '#eae7dc', borderColor: 'red' },
                label: { color: '#eae7dc', fontFamily: 'Oswald', letterSpacing: 3 },
              }}
            />

            <PasswordInput
              required
              size="md"
              radius="lg"
              label="Hasło"
              id={passwordInputId}
              placeholder="Hasło"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.target.value)}
              error={form.errors.password && 'Hasło powinno zawierać przynajmniej 6 znaków'}
              styles={{
                input: { backgroundColor: '#eae7dc', borderColor: 'red', marginTop: 8 },
                label: { color: '#eae7dc', letterSpacing: 3 },
                innerInput: { margin: 0 },
              }}
            />
            <br />
            <Button
              type="submit"
              fullWidth
              variant="filled"
              color="#8e8d8a"
              size="md"
              radius="lg"
              disabled={isLoading}
              styles={{ inner: { fontSize: '24px' } }}
            >
              {isLoading ? 'Ładowanie...' : 'Zaloguj'}
            </Button>

            <Text style={{ fontFamily: 'Oswald', color: '#eae7dc', textAlign: 'center' }}>
              Nie masz konta?&nbsp;
              <Link
                to={Paths.REGISTER}
                style={{ textDecoration: 'none', color: '#E85A4F', fontFamily: 'Oswald' }}
              >
                Zarejestruj się
              </Link>
            </Text>
          </form>
        </Stack>
      </Paper>
    </div>
  )
}
