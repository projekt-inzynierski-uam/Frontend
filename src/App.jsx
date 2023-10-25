import { useEffect, useState } from 'react'
import ListItem from './components/ListItem'
import ListHeader from './components/ListHeader'
import Auth from './components/Auth'
import {useCookies} from 'react-cookie'
import './index.css'

function App() {

  const [cookies, setCookie, removeCookie] = useCookies(null)
  const userEmail = cookies.Email
  const authToken = cookies.AuthToken
  const [tasks, setTasks] = useState(null)

  const getData = async () => {
    try{
      const response = await fetch(`https://backend-d84p.onrender.com/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    if(authToken){
      getData()
    }
  }, [authToken])

  console.log(tasks)

  return (
    <>
    
      <div className="app">
        {!authToken && <Auth/>}
        {authToken &&
        <>
        <p className="user-email">Witaj {userEmail} </p>
        <ListHeader listName={'Lista Zadań'} getData={getData}/>
        {tasks?.map((task) => <ListItem key={task.id} task={task} getData={getData}/>)}
        </>}
      </div>
    </>
  )
}

export default App
