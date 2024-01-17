import { Grid, Flex, Center, Title, ScrollArea, Button } from '@mantine/core'
import { useState, useEffect } from 'react';
import { DatePicker } from '@mantine/dates';
import CreateTaskGroupModal from '../../modals/CreateTaskGroupModal';
import Cookies from 'js-cookie'
import { CookieName } from '../../../lib/constants/cookies'
import GroupTaskItemUser from './GroupTaskItemUser';
import GroupTaskItemAdmin from './GroupTaskItemAdmin';
import { useLocation } from 'react-router-dom'

const GroupTasks = () => {
    const [permission, setPermission] = useState(false)
    const [value, setValue] = useState([])
    const [tasksSingle, setTasksSingle] = useState([])
    const [tasksAll, setTasksAll] = useState([])
    const userEmail = Cookies.get(CookieName.EMAIL)
    const location = useLocation()
    const { groupId } = location.state

    const getDataSingle = async (data) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/gettasksgroupuser`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
          const json = await response.json()
          setTasksSingle(json)
        } catch (err) {
          console.error(err)
        }
    }

    const getDataAll = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/gettasksgroupallusers/${groupId}`)
          const json = await response.json()
          setTasksAll(json)
        } catch (err) {
          console.error(err)
        }
    }

    const sendDataAll = async () => {
        const values = {dates: value}
        try {
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/datesgroupsall/${groupId}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
            })
            const json = await response.json()
            setTasksAll(json)
        } catch (err) {
            console.error(err)
        }
    }

    const sendDataSingle = async () => {
        const values = {dates: value, groupId: groupId}
        try {
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/datesgroupssingle/${userEmail}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(values)
            })
            const json = await response.json()
            setTasksSingle(json)
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
        getDataSingle({userEmail: userEmail, groupId: groupId}),
        getDataAll()
    }

    useEffect(() => {
        getPermission(),
        getData()
    }, [])

    if(permission){
        return(
            <>
                <Grid>
                    <Grid.Col span={6}>
                        <Flex
                            mih={600}
                            justify="center"
                            align="center"
                        >
                            <DatePicker type="multiple" value={value} onChange={setValue} size='lg'/>
                        </Flex>
                        <Center>
                                <Button bg="#E98074" size='md' onClick={sendDataAll} type="submit" style={{borderRadius:"50px", fontSize:"20px", fontWeight:"normal"}}>Filtruj</Button>
                            </Center>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Center>
                            <Title order={2} ff={"Oswald"} c='#8E8D8A'>Zadania</Title>
                        </Center>
                        <Flex
                            mih="600"
                            gap="0"
                            justify="flex-start"
                            align="flex-start"
                            direction="column"
                            style={{border:"7px solid #E98074", borderRadius:"50px"}}
                        >
                        <ScrollArea w="100%" h={600} offsetScrollbars style={{borderRadius:"50px"}}>
                            {tasksAll?.map((task) => (
                                <GroupTaskItemAdmin key={task.id} task={task} getData={getData}/>
                            ))}
                        </ScrollArea>
                        </Flex>
                        <Center>
                            <CreateTaskGroupModal groupId={groupId} getData={getData} userEmail={userEmail}/>
                        </Center>
                    </Grid.Col>
                </Grid>
            </> 
        )
    }else{
        return(
            <>
                <Grid>
                    <Grid.Col span={6}>
                        <Flex
                            mih={600}
                            justify="center"
                            align="center"
                        >
                            <DatePicker type="multiple" value={value} onChange={setValue} size='lg'/>
                        </Flex>
                        <Center>
                            <Button bg="#E98074" size='md' onClick={sendDataSingle} type="submit" style={{borderRadius:"50px", fontSize:"20px", fontWeight:"normal"}}>Filtruj</Button>
                        </Center>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Center>
                            <Title order={2} ff={"Oswald"} c='#8E8D8A'>Zadania</Title>
                        </Center>
                        <Flex
                            mih="600"
                            gap="0"
                            justify="flex-start"
                            align="flex-start"
                            direction="column"
                            style={{border:"7px solid #E98074", borderRadius:"50px"}}
                        >
                        <ScrollArea w="100%" h={600} offsetScrollbars style={{borderRadius:"50px"}}>
                            {tasksSingle?.map((task) => (
                                <GroupTaskItemUser key={task.id} task={task} getData={getData}/>
                            ))}
                        </ScrollArea>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </> 
        )
    }
}

export default GroupTasks