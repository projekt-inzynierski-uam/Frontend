import { Flex, Text, Center, Button } from '@mantine/core'
import { Link, useLocation } from 'react-router-dom'

const GroupDashboard = () => {
    const location = useLocation()
    const { groupId, groupName } = location.state
    return(
        <>
        <Flex
            direction="row"
            wrap="wrap"
            w="100%"
            h="500px"
        >
            <Flex
                    gap="3px"
                    justify="center"
                    align="center"
                    direction="row"
                    w="100%"
                >
                <Link to={'/dashboard'} style={{width:"100%"}}>
                        <Button w="100%" h="160px" style={{borderRadius:"20px"}} bg="#E98074">
                            <Flex 
                                c="#FFF5F3" 
                                ff={"Oswald"}
                                direction="column"
                                gap="xl"
                            >
                                    <Center w="100%" h="100%"> 
                                        <Text size="xl">Panel</Text>
                                    </Center>
                                    <Text ta="center" bg="#8E8D8A" w="100%" h="100%" style={{borderRadius:"10px"}}>Opis</Text>
                            </Flex>
                        </Button>
                </Link>
                <Link to={'/dashboard'} style={{width:"100%"}}>
                        <Button w="100%" h="160px" style={{borderRadius:"20px"}} bg="#E98074">
                            <Flex 
                                c="#FFF5F3" 
                                ff={"Oswald"}
                                direction="column"
                                gap="xl"
                            >
                                    <Center w="100%" h="100%"> 
                                        <Text size="xl">Zadania</Text>
                                    </Center>
                                    <Text ta="center" bg="#8E8D8A" w="100%" h="100%" style={{borderRadius:"10px"}}>Opis</Text>
                            </Flex>
                        </Button>
                </Link>
                </Flex>   
                <Flex
                    justify="center"
                    gap="3px"
                    align="center"
                    direction="row"
                    w="100%"
                >
                <Link to={'/dashboard'} style={{width:"100%"}}>
                        <Button w="100%" h="160px" style={{borderRadius:"20px"}} bg="#E98074">
                            <Flex 
                                c="#FFF5F3" 
                                ff={"Oswald"}
                                direction="column"
                                gap="xl"
                            >
                                    <Center w="100%" h="100%"> 
                                        <Text size="xl">Cele</Text>
                                    </Center>
                                    <Text ta="center" bg="#8E8D8A" w="100%" h="100%" style={{borderRadius:"10px"}}>Opis</Text>
                            </Flex>
                        </Button>
                </Link>
                <Link to={`/dashboard/grupy/${groupId}/uzytkownicy`} state={{groupName: groupName}} style={{width:"100%"}}>
                        <Button w="100%" h="160px" style={{borderRadius:"20px"}} bg="#E98074">
                            <Flex 
                                c="#FFF5F3" 
                                ff={"Oswald"}
                                direction="column"
                                gap="xl"
                            >
                                    <Center w="100%" h="100%"> 
                                        <Text size="xl">Użytkownicy</Text>
                                    </Center>
                                    <Text ta="center" bg="#8E8D8A" w="100%" h="100%" style={{borderRadius:"10px"}}>Opis</Text>
                            </Flex>
                        </Button>
                </Link>
                </Flex>
            </Flex>   
            <Center>
            <Button w="50%" h="160px" style={{borderRadius:"20px"}} bg="#8E8D8A">
                <Flex 
                    c="#FFF5F3" 
                    ff={"Oswald"}
                    direction="column"
                    gap="xl"
                >
                    <Center w="100%" h="100%"> 
                        <Text size="xl">Ustawienia</Text>
                    </Center>
                </Flex>
        </Button>
        </Center>
        </>
    )
}

export default GroupDashboard