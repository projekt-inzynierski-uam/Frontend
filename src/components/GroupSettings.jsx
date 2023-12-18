import { Flex, Button, Text } from '@mantine/core'
import { useLocation } from 'react-router-dom'

const GroupSettings = () => {
    const location = useLocation()
    const { groupId } = location.state

    const deleteGroup = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/deletegroup/${groupId}`,{
            method: 'DELETE',
        })
        }catch(err){
          console.error(err)
        }
    }

    return(
        <>
        <Flex
            justify="center"
            align="center"
            mih={800}
        >
            <Button onClick={deleteGroup} w="25%" h={140} style={{borderRadius:"20px"}} bg="#8E8D8A">
                <Text size='xl'>Usuń grupę</Text>
            </Button>    
        </Flex>
        </>
    )
}

export default GroupSettings