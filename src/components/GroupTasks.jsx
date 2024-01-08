import { Grid, Flex, Center, Title, ScrollArea } from '@mantine/core'
import { useState, useEffect } from 'react';
import { DatePicker } from '@mantine/dates';
import CreateTaskGroupModal from './modals/CreateTaskGroupModal';
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'
import TaskItem from './TaskItem';
import { useLocation } from 'react-router-dom'

const GroupTasks = () => {
    const [value, setValue] = useState([])
    const [tasks, setTasks] = useState([])
    const userEmail = Cookies.get(CookieName.EMAIL)
    const location = useLocation()
    const { groupId } = location.state

    const getData = async (data) => {
        try {
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/gettasksgroup`, {
                method: 'GET',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            })
          const json = await response.json()
          setTasks(json)
        } catch (err) {
          console.error(err)
        }
    }

    useEffect(() => {
        getData({userEmail: userEmail, groupId: groupId})
    }, [])

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
                        {tasks?.map((task) => (
                            <TaskItem key={task.id} task={task} getData={getData}/>
                        ))}
                    </ScrollArea>
                    </Flex>
                    <Center>
                        <CreateTaskGroupModal groupId={groupId} getData={getData}/>
                    </Center>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default GroupTasks