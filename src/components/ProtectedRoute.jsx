import { useEffect } from 'react'
import { Cookies } from 'react-cookie'

const ProtectedRoute = ({ children, redirectPath = '../views/Dashboard' }) => {
    const router = useRouter()
  
    useEffect(() => {
      const token = Cookies.get('AuthToken')
      
      if (!token) router.push(redirectPath)
    }, [redirectPath])

    return <>{children}</>
  }

  export default ProtectedRoute