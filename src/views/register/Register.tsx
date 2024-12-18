import { useId, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button, TextInput, PasswordInput, Paper, Stack, Text } from '@mantine/core'
import { useForm } from '@mantine/form'
import { Paths } from '../../routes/paths'
import { toast } from 'react-toastify'
import '../../styles/LoginRegister.css'

const ENDPOINT = `${import.meta.env.VITE_DBSERVER}/signup`

export const Register = () => {
  const emailInputId = useId()
  const passwordInputId = useId()
  const confirmPasswordInputId = useId()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Nieprawidłowy adres email'),
      password: (val) => (val.length < 6 ? 'Hasło powinno zawierać przynajmniej 6 znaków' : null),
      confirmPassword: (val, values) => (val !== values.password ? 'Hasła się nie zgadzają' : null),
    },
  })

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (isLoading) return
    event.preventDefault()

    try {
      setIsLoading(true)

      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(form.values),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      navigate(Paths.LOGIN)
      toast.success('Konto zostało utworzone')
    } catch (error) {
      console.error(error)
      toast.error('Użytkownik o takim mailu jest już stworzony lub hasła się nie zgadzają lub hasło jest krótsze niż 6 znaków')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-form-container">
      <Paper bg="rgb(233, 128, 116)" shadow="xs" radius="lg" p="xl">
        <Stack h={340} w={250}>
          <form onSubmit={handleOnSubmit}>
            <TextInput
              required
              size="md"
              radius="lg"
              label="Adres email"
              id={emailInputId}
              placeholder="Email"
              styles={{
                input: { backgroundColor: '#eae7dc', borderColor: 'red' },
                label: { color: '#eae7dc', fontFamily: 'Oswald', letterSpacing: 3 },
              }}
              {...form.getInputProps('email')}
            />

            <PasswordInput
              required
              size="md"
              radius="lg"
              label="Hasło"
              id={passwordInputId}
              placeholder="Hasło"
              styles={{
                input: { backgroundColor: '#eae7dc', borderColor: 'red', marginTop: 8 },
                label: { color: '#eae7dc', fontFamily: 'Oswald', letterSpacing: 3 },
                innerInput: { margin: 0 },
              }}
              {...form.getInputProps('password')}
            />

            <PasswordInput
              required
              size="md"
              radius="lg"
              label="Potwierdź hasło"
              id={confirmPasswordInputId}
              placeholder="Potwierdź hasło"
              {...form.getInputProps('confirmPassword')}
              styles={{
                input: { backgroundColor: '#eae7dc', borderColor: 'red', marginTop: 8 },
                label: { color: '#eae7dc', fontFamily: 'Oswald', marginTop: 8, letterSpacing: 3 },
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
              {isLoading ? 'Ładowanie...' : 'Zarejestruj się'}
            </Button>

            <Text style={{ fontFamily: 'Oswald' }} c="#eae7dc" ta="center">
              Masz już konto?&nbsp;
              <Link
                to={Paths.LOGIN}
                style={{ textDecoration: 'none', color: '#E85A4F', fontFamily: 'Oswald' }}
              >
                Zaloguj się
              </Link>
            </Text>
          </form>
        </Stack>
      </Paper>
    </div>
  )
}
