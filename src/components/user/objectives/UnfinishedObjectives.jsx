import {Flex, ScrollArea, Title, Center} from '@mantine/core'
import UnfinishedObjectiveItem from './UnfinishedObjectiveItem'
import CreateObjectiveModal from '../../modals/CreateObjectiveModal'

const UnfinishedObjectives = ({unfinishedObjectives, userEmail, getData}) => {


    return (
        <>
            <Center>
                <Title order={2} ff={"Oswald"} c='#8E8D8A'>Nieskończone cele</Title>
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
                    {unfinishedObjectives?.map((unfinishedObjective) => (
                        <UnfinishedObjectiveItem key={unfinishedObjective.id} objective={unfinishedObjective} getData={getData}/>
                    ))}
                </ScrollArea>
            </Flex>
            <Center>
                <CreateObjectiveModal email={userEmail} getData={getData}/>
            </Center>
        </>
    )
}

export default UnfinishedObjectives