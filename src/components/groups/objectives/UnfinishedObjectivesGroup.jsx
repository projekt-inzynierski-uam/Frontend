import {Flex, ScrollArea, Text, Center} from '@mantine/core'
import UnfinishedObjectiveGroupItem from './UnfinishedObjectiveGroupItem'
import CreateObjectiveModalGroup from '../../modals/CreateObjectiveModalGroup'

const UnfinishedObjectivesGroup = ({unfinishedObjectives, getData, groupId, userEmail}) => {


    return (
        <>
            <Center>
                <Text size='40px' ff={"Oswald"} c='#8E8D8A'>Utworzone cele</Text>
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
                        <UnfinishedObjectiveGroupItem key={unfinishedObjective.id} objective={unfinishedObjective} getData={getData}/>
                    ))}
                </ScrollArea>
            </Flex>
            <Center>
                <CreateObjectiveModalGroup getData={getData} groupId={groupId} userEmail={userEmail}/>
            </Center>
        </>
    )
}

export default UnfinishedObjectivesGroup