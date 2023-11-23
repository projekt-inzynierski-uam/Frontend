import { ReactNode, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useNavigate, useLocation } from 'react-router-dom'
import { Paths } from '../paths'

type ProtectedRouteProps = {
  children: ReactNode
  redirectPath?: string
}

export const ProtectedRoute = ({ children, redirectPath = Paths.LOGIN }: ProtectedRouteProps) => {
  const [cookies] = useCookies()
  const location = useLocation()
  const navigate = useNavigate()
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    setIsAuthenticated(!!cookies.AuthToken)

    if (!cookies.AuthToken) {
      navigate(redirectPath)
    }
  }, [redirectPath, cookies, navigate, location])

  return isAuthenticated && children
}