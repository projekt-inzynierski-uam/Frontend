import { Flex, ScrollArea, Title, Center } from '@mantine/core'
import { useLocation } from 'react-router-dom'

const GroupUsers = () => {
    const location = useLocation()
    const { groupName } = location.state
    return(
        <>
            <Center>
                <Title order={2} ff={"Oswald"} c='#8E8D8A'>Lista użytkowników grupy "{groupName}"</Title>
            </Center>
            <Center>
                <Flex
                    w="70%"
                    mih="600"
                    gap="0"
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    style={{border:"7px solid #E98074", borderRadius:"50px"}}
                >
                    <ScrollArea w="100%" h={600} offsetScrollbars style={{borderRadius:"50px"}}>
                        
                    </ScrollArea>
                </Flex>
            </Center>
        </>
    )
}

export default GroupUsers