import { useNavigate } from 'react-router-dom'

import { Paths } from '../routes/paths'
import { removeAllCookies } from '../lib/constants/helpers/removeAllCookies'

const Settings = () => {
  const navigate = useNavigate()

  const signOut = () => {
    removeAllCookies()
    navigate(Paths.HOME)
  }

  return (
    <button className="signout" onClick={signOut}>
      WYLOGUJ SIĘ
    </button>
  )
}

export default Settings
