import { Group, Flex, Text, Button } from "@mantine/core"
import { toast } from 'react-toastify'

const GroupUserItem = ({groupId, user, permission, getData}) => {

    const deleteUser = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/removeuser/`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId: groupId, email: user.user_email}),
        })
        if(response.status == 400){
            toast.error('Nie można usunąć twórcy grupy')
        }
        getData()
        }catch(err){
          console.error(err)
        }
    }
    if(!permission){
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
                        <Text ta="center" pl="10px" size="lg" w="70%">{user.user_email}</Text>
                        <Text ta="center" pl="10px" size="lg" w="20%">{user.isadmin ? 'Administrator' : 'Użytkownik'}</Text>
                    </Group>
                </Flex>
            </> 
        )
    }else{
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
                        <Text ta="center" pl="10px" size="lg" w="70%">{user.user_email}</Text>
                        <Text ta="center" pl="10px" size="lg" w="20%">{user.isadmin ? 'Administrator' : 'Użytkownik'}</Text>
                    </Group>
                    <Button onClick={deleteUser} bg="#8E8D8A" size="md" style={{borderRadius:"50px"}}>
                        Wyrzuć
                    </Button>
                </Flex>
            </>
        )
    }
}

export default GroupUserItem