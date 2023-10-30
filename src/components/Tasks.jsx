import ListItem from "./ListItem"
import ListHeader from "./ListHeader"
import { useState, useEffect } from 'react'
import {useCookies} from 'react-cookie'

const Tasks = () => {

    const [cookies] = useCookies(null)
    const [tasks, setTasks] = useState(null)
    const userEmail = cookies.Email

    const getData = async () => {
        try{
          const response = await fetch(`https://projekt-backend.onrender.com/todos/${userEmail}`)
          const json = await response.json()
          setTasks(json)
        } catch (err) {
          console.error(err)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <>
        <ListHeader listName={'Lista Zadań'} getData={getData}/>
        {tasks?.map((task) => <ListItem key={task.id} task={task} getData={getData}/>)}
        </>
    )
}

export default Tasks