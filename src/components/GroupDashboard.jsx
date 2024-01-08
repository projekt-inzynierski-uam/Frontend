import { Flex, Text, Center, Button, Group } from '@mantine/core'
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
                <Link to={`/dashboard/grupy/${groupId}/panel`} state={{groupId: groupId}} style={{width:"100%"}}>
                        <Button w="95%" h="220px" style={{borderRadius:"20px"}} bg="#E98074">
                            <Flex 
                                c="#FFF5F3" 
                                ff={"Oswald"}
                                direction="column"
                                gap="xl"
                            >
                                    <Center w="100%" h="100%"> 
                                        <Text size="xl">Panel</Text>
                                    </Center>
                                    <Group ta="center" bg="#8E8D8A" w="100%" h="70px" style={{borderRadius:"10px"}}>
                                        <Flex
                                            direction="column"
                                        >   
                                                <Text>
                                                    Administrator grupy może tu akceptować zadania oddane przez użytkowników
                                                </Text>
                                                <Text>
                                                    Członek grupy znajdzie tutaj swój cel i jego postęp
                                                </Text>
                                            </Flex>
                                    </Group>
                            </Flex>
                        </Button>
                </Link>
                <Link to={`/dashboard/grupy/${groupId}/zadania`} state={{groupId: groupId}} style={{width:"100%"}}>
                        <Button w="95%" h="220px" style={{borderRadius:"20px"}} bg="#E98074">
                            <Flex 
                                c="#FFF5F3" 
                                ff={"Oswald"}
                                direction="column"
                                gap="xl"
                            >
                                    <Center w="100%" h="100%"> 
                                        <Text size="xl">Zadania</Text>
                                    </Center>
                                    <Group ta="center" bg="#8E8D8A" w="100%" h="70px" style={{borderRadius:"10px"}}>
                                        <Flex
                                            direction="column"
                                        >   
                                                <Text>
                                                    Administrator grupy doda tutaj zadania dla siebie lub innego członka grupy
                                                </Text>
                                                <Text>
                                                    Członek grupy widzi tutaj swoje zadania
                                                </Text>
                                            </Flex>
                                    </Group>
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
                <Link to={`/dashboard/grupy/${groupId}/cele`} state={{groupId: groupId}} style={{width:"100%"}}>
                        <Button w="95%" h="220px" style={{borderRadius:"20px"}} bg="#E98074">
                            <Flex 
                                c="#FFF5F3" 
                                ff={"Oswald"}
                                direction="column"
                                gap="xl"
                                w="100%"
                            >
                                    <Center w="100%"> 
                                        <Text size="xl">Cele</Text>
                                    </Center>
                                    <Group ta="center" bg="#8E8D8A" w="100%" h="70px" style={{borderRadius:"10px"}}>
                                        <Flex
                                            direction="column"
                                        >   
                                                <Text>
                                                    Widoczne tylko dla administarora grupy cele które może 
                                                </Text>
                                                <Text>
                                                    dodawać i przypisywać członkom grupy
                                                </Text>
                                            </Flex>
                                    </Group>
                            </Flex>
                        </Button>
                </Link>
                <Link to={`/dashboard/grupy/${groupId}/uzytkownicy`} state={{groupId: groupId, groupName: groupName}} style={{width:"100%"}}>
                        <Button w="95%" h="220px" style={{borderRadius:"20px"}} bg="#E98074">
                            <Flex 
                                c="#FFF5F3" 
                                ff={"Oswald"}
                                direction="column"
                                gap="xl"
                            >
                                    <Center w="100%" h="100%"> 
                                        <Text size="xl">Użytkownicy</Text>
                                    </Center>
                                    <Group ta="center" bg="#8E8D8A" w="100%" h="70px" style={{borderRadius:"10px"}}>
                                        <Flex
                                            direction="column"
                                        >   
                                                <Text>
                                                    Lista użytkowników znajdujących się w grupie
                                                </Text>
                                                <Text>
                                                    którymi administrator grupy może zarządzać
                                                </Text>
                                            </Flex>
                                    </Group>
                            </Flex>
                        </Button>
                </Link>
                </Flex>
            </Flex>   
                <Link to={`/dashboard/grupy/${groupId}/ustawienia`} state={{groupId: groupId}} style={{width:"100%", textDecoration:"none"}}>
                <Center>
                    <Button w="50%" h="220px" style={{borderRadius:"20px"}} bg="#8E8D8A">
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
                </Link>
        </>
    )
}

export default GroupDashboard