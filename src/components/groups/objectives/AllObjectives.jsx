import {Flex, ScrollArea, Title, Center, useRandomClassName} from '@mantine/core'
import AllObjectivesItem from './AllObjectivesItem'
import ChangeObjectiveConnectionModal from '../../modals/ChangeObjectiveConnectionModal'

const AllObjectives = ({unfinishedObjectives, getData, groupId, users}) => {
    return(
        <>
            <Center>
                <Title order={2} ff={"Oswald"} c='#8E8D8A'>Przypisane cele w grupie</Title>
            </Center>
            <Flex
                mih="600"
                gap="0"
                justify="flex-start"
                align="flex-start"
                direction="column"
                style={{border:"7px solid #E98074", borderRadius:"50px"}}
            >
                <ScrollArea w="100%" h={400} offsetScrollbars style={{borderRadius:"50px"}}>
                    {unfinishedObjectives?.map((unfinishedObjective) => (
                        <AllObjectivesItem key={unfinishedObjective.id} objective={unfinishedObjective}/>
                    ))}
                </ScrollArea>
            </Flex>
            <Center>
                <ChangeObjectiveConnectionModal getData={getData} groupId={groupId} users={users} objectives={unfinishedObjectives}/>
            </Center>
        </>
    )
}

export default AllObjectives