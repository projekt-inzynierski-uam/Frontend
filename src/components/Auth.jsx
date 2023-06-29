import { useState } from "react"
import {useCookies} from 'react-cookie'

const Auth = () => {

    const [isLogin, setIsLogin] = useState(true)
    const [error, setError] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmedPassword, setConfirmedPassword] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(null)

    const viewLogin = (status) => {
      setError(null)
      setIsLogin(status)
    }

    const handleSubmit = async (e, endpoint) => {
      e.preventDefault()
      if(!isLogin && password !== confirmedPassword){
        setError('Hasła się nie zgadzają')
        return
      }

      const response = await fetch(`http://localhost:8000/${endpoint}`,{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
      })

      const data = await response.json()

      if(data.detail){
        setError(data.detail)
      } else {
        setCookie('Email', data.email)
        setCookie('AuthToken', data.token)

        windows.location.reload()
      }
    }

    return (
      <>
        <div className="auth-container">
          <div className="auth-container-box">
            <form>
              <h2>{isLogin ? 'Logowanie' : 'Rejestracja'}</h2>
              <input 
              type="email" 
              placeholder="email" 
              onChange={(e) => setEmail(e.target.value)}/>
              <input 
              type="password" 
              placeholder="hasło" 
              onChange={(e) => setPassword(e.target.value)}/>
              {!isLogin && 
              <input 
              type="password" 
              placeholder="potwierdź hasło"
              onChange={(e) => setConfirmedPassword(e.target.value)}
              />}
              <input type="submit" 
              className="create" 
              onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')}/>
              {error && <p>{error}</p>}
            </form>
            <div className="auth-options">
              <button 
              onClick={() => viewLogin(false)}
              style={{backgroundColor : !isLogin ? 'rgb(255,255,255)' : 'rgb(188,188,188)'}}
              >Zarejestruj się</button>
              <button 
              onClick={() => viewLogin(true)}
              style={{backgroundColor : !isLogin ? 'rgb(188,188,188)' : 'rgb(255,255,255)'}}
              >Zaloguj się</button>
          </div>
        </div>
        </div>
      </>
    )
  }
  
  export default Auth
  