import { useId, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

import { Paths } from '../../routes/paths'
import { CookieName } from '../../lib/constants/cookies'

const ENDPOINT = `${import.meta.env.VITE_DBSERVER}/login`

type Response = {
  token: string
  email: string
}

type FormValues = {
  email: string
  password: string
}

export const Login = () => {
  const emailInputId = useId()
  const passwordInputId = useId()
  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState(false)
  const [formValues, setFormValues] = useState<FormValues>({
    email: '',
    password: '',
  })

  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.target as HTMLInputElement

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

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
        body: JSON.stringify(formValues),
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
    <div>
      <div>
        <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <label htmlFor={emailInputId}>Adres e-mail</label>
          <input
            required
            name="email"
            type="email"
            id={emailInputId}
            placeholder="janusz@gmail.com"
          />

          <label htmlFor={passwordInputId}>Hasło</label>
          <input
            required
            name="password"
            type="password"
            id={passwordInputId}
            placeholder="Password"
          />

          <button disabled={isLoading}>{isLoading ? 'Ładowanie...' : 'Zaloguj'}</button>
        </form>
      </div>
      <div>
        Nie masz jeszcze konta? <Link to={Paths.REGISTER}> Zarejestruj się </Link>
      </div>
    </div>
  )
}
