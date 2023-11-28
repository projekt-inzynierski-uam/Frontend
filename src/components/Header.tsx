import '../styles/Header.css'
import Cookies from 'js-cookie'

import { CookieName } from '../lib/constants/cookies'

export const Header = () => {
  const userEmail = Cookies.get(CookieName.EMAIL)

  return <div className="header">Hi, {userEmail}</div>
}
