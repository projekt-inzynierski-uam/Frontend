import { Flex, Text, Center, Button } from '@mantine/core'
import { Link } from 'react-router-dom'

const GroupItem = ({group}) => {
    return(
        <>
        <Flex
                gap="2px"
                justify="center"
                align="center"
                direction="row"
                p="xs"
                w="33%"
            >
                <Link to={`/dashboard/grupy/${group.id}`} state={{groupId: group.id, groupName: group.name}} style={{width:"100%"}}>
                    <Button w="100%" h="160px" style={{borderRadius:"20px"}} bg="#E98074">
                        <Flex 
                            c="#FFF5F3" 
                            ff={"Oswald"}
                            direction="column"
                            gap="xl"
                        >
                                <Center w="100%" h="100%"> 
                                    <Text size="xl">{group.name}</Text>
                                </Center>
                        </Flex>
                    </Button>
                </Link>
            </Flex>
        </>
    )
}

export default GroupItem