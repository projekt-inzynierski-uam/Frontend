import {Flex, ScrollArea, Title, Center} from '@mantine/core'
import FinishedObjectiveItem from './FinishedObjectiveItem'

const FinishedObjectives = ({finishedObjectives, getData}) => {

    return (
        <>
            <Center>
                <Title order={2} ff={"Oswald"} c='#8E8D8A'>Skończone cele</Title>
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
                    {finishedObjectives?.map((finishedObjective) => (
                        <FinishedObjectiveItem key={finishedObjective.id} objective={finishedObjective} getData={getData}/>
                    ))}
                </ScrollArea>
            </Flex>
        </>
    )
}

export default FinishedObjectives