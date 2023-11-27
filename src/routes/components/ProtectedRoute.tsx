import { ReactNode, useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Paths } from '../paths'

type ProtectedRouteProps = {
  children: ReactNode
  redirectPath?: string
}

export const ProtectedRoute = ({ children, redirectPath = Paths.LOGIN }: ProtectedRouteProps) => {
  const location = useLocation()
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const authToken = Cookies.get('AuthToken')

    setIsAuthenticated(!!authToken)

    if (!authToken) {
      navigate(redirectPath)
    }
  }, [redirectPath, navigate, location])

  return isAuthenticated && children
}
