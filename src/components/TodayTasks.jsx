import { Center, Flex, ScrollArea, Title } from '@mantine/core'

const TodayTasks = () => {
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
                    
                </ScrollArea>
            </Flex>
            <Center>
                
            </Center>
        </>
    )
}

export default TodayTasks