import { Flex, Center, Title, ScrollArea } from '@mantine/core'
import UserGroupTaskItem from './UserGroupTaskItem';

const TodayTasksUser = ({getData, tasks}) => {
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
                <ScrollArea w="100%" h={600} offsetScrollbars style={{borderRadius:"50px"}}>
                    {tasks?.map((task) => (
                            <UserGroupTaskItem key={task.id} task={task} getData={getData}/>
                        ))}
                </ScrollArea>
            </Flex>
            <Center>
                
            </Center>
        </>
    )
}

export default TodayTasksUser