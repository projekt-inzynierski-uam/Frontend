import '../styles/Header.css'
import Cookies from 'js-cookie'

import { CookieName } from '../lib/constants/cookies'

const Header = () => {
  const userEmail = Cookies.get(CookieName.EMAIL)

  console.log(userEmail)

  return <div className="header">Hi, {userEmail}</div>
}

export default Header
