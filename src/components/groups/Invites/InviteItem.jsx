import { Group, Flex, Text, Button } from "@mantine/core"

const InviteItem = ({group, email, getData}) => {
    const AcceptInvite = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/acceptinvite/`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId: group.id, email: email}),
        })
        getData()
        }catch(err){
          console.error(err)
        }
    }

    const DeclineInvite = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/declineinvite/`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId: group.id, email: email}),
        })
        getData()
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
                <Group c="#FFF5F3" bg="#E98074" w="100%" style={{borderRadius:"50px", height:"40px"}} ff={"Oswald"}>
                    <Text ta="center" pl="10px" size="lg" w="70%">{group.name}</Text>
                </Group>
                <Button onClick={AcceptInvite} bg="#E98074" style={{borderRadius:"50px"}}>
                    Akceptuj
                </Button>
                <Button onClick={DeclineInvite} bg="#8E8D8A" style={{borderRadius:"50px"}}>
                    Odrzuć
                </Button>
            </Flex>
        </> 
    )
}

export default InviteItem