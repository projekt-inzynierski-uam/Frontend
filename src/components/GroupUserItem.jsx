import { Group, Flex, Text, Button } from "@mantine/core"

const GroupUserItem = ({groupId, user}) => {

    const deleteObjective = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/removeuser/`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId: groupId, email: user.email}),
        })
        if(response.status === 200){
            getData()
        }
        }catch(err){
          console.error(err)
        }
    }

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
                <Button onClick={deleteObjective} bg="#8E8D8A" style={{borderRadius:"50px"}}>
                    Wyrzuć
                </Button>
            </Flex>
        </> 
    )
}

export default GroupUserItem