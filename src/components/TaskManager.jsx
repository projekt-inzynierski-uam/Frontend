import { Grid, Flex, Center, Title, ScrollArea } from '@mantine/core'
import { useState, useEffect } from 'react';
import { DatePicker } from '@mantine/dates';
import CreateTaskModal from './modals/CreateTaskModal';
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'
import TaskItem from './TaskItem';

const TaskManager = () => {
    const [value, setValue] = useState([])
    const [tasks, setTasks] = useState([])
    const userEmail = Cookies.get(CookieName.EMAIL)

    const getData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/gettasks/${userEmail}`)
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
            <Grid>
                <Grid.Col span={6}>
                    <Flex
                        mih={600}
                        justify="center"
                        align="center"
                    >
                        <DatePicker type="multiple" value={value} onChange={() => {setValue()}} size='lg'/>
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
                            <TaskItem key={task.id} task={task}/>
                        ))}
                    </ScrollArea>
                    </Flex>
                    <Center>
                        <CreateTaskModal email={userEmail}/>
                    </Center>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default TaskManager