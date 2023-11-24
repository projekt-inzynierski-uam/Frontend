import { useCookies } from 'react-cookie'
import { useNavigate } from 'react-router-dom'
import { Paths } from '../routes/paths'

const Settings = () => {
  const navigate = useNavigate()
  const [cookies, setCookie, removeCookie] = useCookies(null)

  const signOut = () => {
    removeCookie('Email')
    removeCookie('AuthToken')
    navigate(Paths.HOME)
  }

  return (
    <button className="signout" onClick={signOut}>
      WYLOGUJ SIĘ
    </button>
  )
}

export default Settings
