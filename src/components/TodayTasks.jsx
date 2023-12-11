import { Flex, Center, Title, ScrollArea } from '@mantine/core'
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'
import TaskItem from './TaskItem';

const TodayTasks = () => {
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
            <Center>
                <Title order={2} ff={"Oswald"} c='#8E8D8A'>Dzisiejsze zadania</Title>
            </Center>
            <Flex
                mih="400"
                gap="0"
                justify="flex-start"
                align="flex-start"
                direction="column"
                style={{border:"7px solid #E98074", borderRadius:"50px"}}
            >
                <ScrollArea w="100%" h={400} offsetScrollbars style={{borderRadius:"50px"}}>
                    {tasks?.map((task) => (
                            <TaskItem key={task.id} task={task} email={userEmail}/>
                        ))}
                </ScrollArea>
            </Flex>
            <Center>
                
            </Center>
        </>
    )
}

export default TodayTasks