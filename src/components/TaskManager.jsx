import { Grid, Flex, Center, Title, ScrollArea } from '@mantine/core'
import { useState } from 'react';
import { DatePicker } from '@mantine/dates';
import CreateTaskModal from './modals/CreateTaskModal';
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'

const TaskManager = () => {
    const [value, setValue] = useState([])
    const userEmail = Cookies.get(CookieName.EMAIL)
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
                        {console.log(value)}
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