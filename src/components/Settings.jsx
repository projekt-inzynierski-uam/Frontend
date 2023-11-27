import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

import { Paths } from '../routes/paths'
import { CookieName } from '../lib/constants/cookies'

const Settings = () => {
  const navigate = useNavigate()

  const signOut = () => {
    Cookies.remove(CookieName.EMAIL)
    Cookies.remove(CookieName.AUTH_TOKEN)
    navigate(Paths.HOME)
  }

  return (
    <button className="signout" onClick={signOut}>
      WYLOGUJ SIĘ
    </button>
  )
}

export default Settings
