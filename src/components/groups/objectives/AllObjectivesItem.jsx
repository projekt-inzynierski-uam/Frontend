import {Flex, Group, Text} from '@mantine/core'

const AllObjectivesItem = ({objective}) => {
    return(
        <>
        <Flex
                gap="2px"
                justify="center"
                align="center"
                direction="row"
                p="xs"
                w="100%"
            >
                <Group c="#FFF5F3" bg="#E98074" w="100%"style={{borderRadius:"50px", height:"40px"}} ff={"Oswald"}>
                    <Text ta="center" pl="10px" size="lg" w="30%">{objective.title}</Text>
                    <Group bg="#8E8D8A" miw="20%" maw="50%" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                        <Text>{objective.current_points}/{objective.max_points}</Text>
                    </Group>
                    <Text>Przypisane do:{objective.assignedto}</Text>
                </Group>
            </Flex>
        </>
    )
}

export default AllObjectivesItem