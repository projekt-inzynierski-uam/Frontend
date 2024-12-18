import { Grid } from '@mantine/core'
import TodayTasksUser from './TodayTasksUser'
import FinishedTasks from './FinishedTasks'
import AdminTasks from './AdminTasks'
import IncomingTasksUser from './IncomingTasksUser'
import ActiveObjectiveGroup from './ActiveObjectiveGroup'
import { useLocation } from 'react-router-dom'
import Cookies from 'js-cookie'
import { CookieName } from '../../../lib/constants/cookies'
import { useState, useEffect } from 'react'

const GroupPanel = () => {
    const [finishedTasks, setFinishedTasks] = useState([])
    const [todayTaskUser, setTodayTaskUser] = useState([])
    const [incomingTasks, setIncomingTasks] = useState([])
    const [activeObjective, setActiveObjective] = useState([{title:"Ustaw cel", current_points:"0", max_points:"0"},{title:"Ustaw cel", current_points:"0", max_points:"0"}])
    const [adminTasks, setAdminTasks] = useState([])
    const userEmail = Cookies.get(CookieName.EMAIL)
    const [permission, setPermission] = useState(false)
    const location = useLocation()
    const { groupId } = location.state

    const getFinishedTasks = async () => {
        const response = await fetch(`${import.meta.env.VITE_DBSERVER}/getfinishedtasks/${groupId}`)
        const json = await response.json()
        setFinishedTasks(json)
    }

    const getTodayTaskUser = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/gettodaytaskuser/${userEmail}`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId: groupId})
        })
        const json = await response.json()
        setTodayTaskUser(json)
        }catch(err){
          console.error(err)
        }
    }

    const getIncomingTasks = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/getincominggrouptasks/${userEmail}`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId: groupId})
        })
        const json = await response.json()
        setIncomingTasks(json)
        }catch(err){
          console.error(err)
        }
    }

    const getAdminTasks = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/gettodaytaskuser/${userEmail}`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId: groupId})
        })
        const json = await response.json()
        setAdminTasks(json)
        }catch(err){
          console.error(err)
        }
    }

    const getActiveObjectiveGroup = async () => {
        try{
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/activeobjectivegroup/${userEmail}`,{
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({groupId: groupId})
            })
          const json = await response.json()
          setActiveObjective(json)
        } catch (err) {
          console.error(err)
        }
    }

    const getPermission = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/getpermission/${userEmail}`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId: groupId}),
        })
        const json = await response.json()
        setPermission(json)
        }catch(err){
          console.error(err)
        }
    }

    const getData = async () => {
        getFinishedTasks(),
        getTodayTaskUser(),
        getIncomingTasks(),
        getAdminTasks(),
        getActiveObjectiveGroup()
    }

    useEffect(() => {
        getPermission(),
        getData()
    }, [])

    return(
        <>
            <Grid grow>
                <Grid.Col span={6}>
                </Grid.Col>
                <Grid.Col span={6}>
                    <ActiveObjectiveGroup email={userEmail} getData={getData} activeObjective={activeObjective}/>
                </Grid.Col>
                <Grid.Col span={6}>
                    {permission &&
                        <FinishedTasks getData={getData} tasks={finishedTasks} groupId={groupId}/>
                    }
                    {!permission &&
                        <TodayTasksUser email={userEmail} getData={getData} tasks={todayTaskUser}/>
                    }
                </Grid.Col>
                <Grid.Col span={6}>
                    {permission &&
                        <AdminTasks getData={getData} tasks={adminTasks} groupId={groupId}/>
                    }
                    {!permission &&
                        <IncomingTasksUser tasks={incomingTasks}/>
                    }
                </Grid.Col>
            </Grid>
        </>
    )
}

export default GroupPanel