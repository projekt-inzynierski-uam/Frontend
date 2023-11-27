import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

type Task = {
  id: string
  title: string
  assigned: string
}

async function fetchGroupTasks(id: string) {
  try {
    const response = await fetch(`https://projekt-backend.onrender.com/todos/${id}`)
    const data: Task[] = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

export const GroupTasks = () => {
  const { id } = useParams()
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    if (!id) return
    fetchGroupTasks(id).then((tasks) => {
      if (tasks) setTasks(tasks)
    })
  }, [id])

  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  )
}
