import { ReactNode, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Paths } from '../paths'

import { CookieName } from '../../lib/constants/cookies'
import { removeAllCookies } from '../../lib/constants/helpers/removeAllCookies'

type ProtectedRouteProps = {
  children: ReactNode
  redirectPath?: string
}

export const ProtectedRoute = ({ children, redirectPath = Paths.LOGIN }: ProtectedRouteProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authToken = Cookies.get(CookieName.AUTH_TOKEN)

    setIsAuthenticated(!!authToken)

    if (!authToken) {
      removeAllCookies()
      navigate(redirectPath)
    }
  }, [redirectPath, navigate, location])

  return isAuthenticated && children
}
