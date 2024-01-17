import { Grid } from '@mantine/core'
import TodayTasks from './TodayTasks'
import IncomingTasks from './IncomingTasks'
import ActiveObjective from './ActiveObjective'
import Cookies from 'js-cookie'
import { CookieName } from '../../../lib/constants/cookies'
import { useState, useEffect } from 'react'

const TaskDashboard = () => {
    const [tasksToday, setTasksToday] = useState([{}])
    const [tasksIncoming, setTasksIncoming] = useState([{}])
    const [activeObjective, setActiveObjective] = useState([{title:"Ustaw cel", current_points:"0", max_points:"0"},{title:"Ustaw cel", current_points:"0", max_points:"0"}])
    const userEmail = Cookies.get(CookieName.EMAIL)

    const getTasksToday = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/gettaskstoday/${userEmail}`)
          const json = await response.json()
          setTasksToday(json)
        } catch (err) {
          console.error(err)
        }
    }

    const getTasksIncoming = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/gettasksincoming/${userEmail}`)
          const json = await response.json()
          setTasksIncoming(json)
        } catch (err) {
          console.error(err)
        }
    }

    const getObjective = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/activeobjective/${userEmail}`)
          const json = await response.json()
          setActiveObjective(json)
        } catch (err) {
          console.error(err)
        }
    }

    const getData = async () => {
        getObjective(),
        getTasksIncoming(),
        getTasksToday()
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <>
            <Grid grow>
                <Grid.Col span={6}>
                </Grid.Col>
                <Grid.Col span={6}>
                    <ActiveObjective email={userEmail} getData={getData} activeObjective={activeObjective}/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <TodayTasks email={userEmail} getData={getData} tasks={tasksToday}/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <IncomingTasks email={userEmail} getData={getData} tasks={tasksIncoming} />
                </Grid.Col>
            </Grid>
        </>
    )
}

export default TaskDashboard