import { Flex, Text, Group} from '@mantine/core'

const ActiveObjectiveGroup = ({activeObjective}) => {
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
                <Group w="100%" style={{borderRadius:"50px", height:"40px"}} ff={"Oswald"}>
                    <Text ta="center" c="#8E8D8A" pl="10px" size="30px" w="20%">Aktualny Cel</Text>
                    <Group c="white" bg="#E98074" miw="40%" w="500px" h="40px" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                        <Text ta="center" pl="10px" size="20px" w="200px">{activeObjective[0].title}</Text>
                            <Group bg="#8E8D8A" miw="20%" maw="50%" w="400px" h="30px" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                                <Text size='20px'>{activeObjective[0].current_points}/{activeObjective[0].max_points}</Text>
                            </Group>
                    </Group>
                </Group>
            </Flex>
        </>
    )
}

export default ActiveObjectiveGroup