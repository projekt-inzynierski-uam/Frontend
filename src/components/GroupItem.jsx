import { Flex, Text, Center } from '@mantine/core'

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
                <Flex 
                    c="#FFF5F3" 
                    bg="#E98074"
                    w="100%"
                    style={{borderRadius:"20px", height:"160px"}} 
                    ff={"Oswald"}
                    direction="column"
                >
                    <Center w="100%" h="70%"> 
                        <Text size="lg">{group.name}</Text>
                    </Center>
                    <Text ta="center" bg="#8E8D8A" w="100%" ff={"Oswald"} h="30%" style={{borderRadius:"20px"}}>Opis</Text>
                </Flex>
            </Flex>
        </>
    )
}

export default GroupItem