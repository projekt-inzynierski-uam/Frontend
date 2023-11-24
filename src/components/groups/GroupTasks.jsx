import ListItem from '../ListItem'
import ListHeader from '../ListHeader'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const GroupTasks = () => {
  const [tasks, setTasks] = useState(null)
  let { state } = useLocation()

  const getData = async () => {
    try {
      const response = await fetch(`https://projekt-backend.onrender.com/todos/${state.groupID}`)
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
      <ListHeader listName={'Lista Zadań'} getData={getData} assigned={state.groupID} />
      {tasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
    </>
  )
}

export default GroupTasks
