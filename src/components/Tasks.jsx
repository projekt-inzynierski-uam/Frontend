import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import ListItem from './ListItem'
import ListHeader from './ListHeader'
import { CookieName } from '../lib/constants/cookies'

const Tasks = () => {
  const [tasks, setTasks] = useState(null)
  const userEmail = Cookies.get(CookieName.EMAIL)

  const getData = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_DBSERVER}/todos/${userEmail}`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <ListHeader listName={'Lista Zadań'} getData={getData} assigned={userEmail} />
      {tasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </>
  )
}

export default Tasks
