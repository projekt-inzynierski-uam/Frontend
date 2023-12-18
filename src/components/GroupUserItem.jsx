import { Group, Flex, Text } from "@mantine/core"

const GroupUserItem = ({user}) => {
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
                    <Text ta="center" pl="10px" size="lg" w="100%">{user.email}</Text>
                </Group>
            </Flex>
        </> 
    )
}

export default GroupUserItem