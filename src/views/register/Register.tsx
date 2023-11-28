import { useId, useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Paths } from '../../routes/paths'
import { toast } from 'react-toastify'

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

  return (
    <>
      <Link to={Paths.LOGIN}> Cofnij </Link>
      
      <div>
        <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <label htmlFor={emailInputId}>Adres e-mail</label>
          <input 
            required 
            name='email' 
            type='email' 
            id={emailInputId} 
            placeholder='janusz@gmail.com' 
          />

          <label htmlFor={passwordInputId}>Hasło</label>
          <input 
            required 
            name='password' 
            type='password' 
            id={passwordInputId} 
            placeholder='Password'
          />

          <label htmlFor={confirmPasswordInputId}>Potwierdź Hasło</label>
          <input 
            required 
            name='confirmPassword' 
            type='password' 
            id={confirmPasswordInputId} 
            placeholder='Confirm Password'
          />
          
          <button disabled={isLoading}>{isLoading ? 'Ładowanie...' : 'Zarejestruj'}</button>
        </form>
      </div>
    </>
  )
}