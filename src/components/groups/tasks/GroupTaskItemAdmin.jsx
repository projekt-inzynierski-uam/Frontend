import { Group, Flex, Text, Button } from "@mantine/core"
import Cookies from 'js-cookie'
import { CookieName } from '../../../lib/constants/cookies'

const GroupTaskItemAdmin = ({task, getData}) => {
    const userEmail = Cookies.get(CookieName.EMAIL)
    const DeleteTask = async () => {
        try{
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/deletetaskgroup/${task.id}`,{
              method: 'DELETE',
          })
          if(response.status === 200){
            getData()
          }
          }catch(err){
            console.error(err)
          }
    }

    const FinishTask = async (data) => {
        try{
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/finishtaskgroup${userEmail}`,{
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          })
          DeleteTask()
          }catch(err){
            console.error(err)
          }
    }

    return(
        <>
            <Flex
                justify="center"
                align="center"
                direction="row"
                p="xs"
            >
                <Group c="#FFF5F3" bg="#E98074" w="100%"style={{borderRadius:"50px", height:"40px"}} ff={"Oswald"}>
                    <Text ta="center" pl="10px" size="lg" w="20%">{task.title}</Text>
                    <Text size="16px">Data:{task.day_date}/{task.month_date}/{task.year_date}</Text>
                    <Text size="16px">Wystawił:{task.whoassigned}</Text>
                    <Text size="16px">Dla:{task.assignedto}</Text>
                    <Text size="16px">Punkty:{task.points}</Text>
                </Group>
                <Group bg="#8E8D8A" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                    <Button onClick={DeleteTask} bg="#8E8D8A" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Usuń</Button>
                </Group>
            </Flex>
        </>
    )
}

export default GroupTaskItemAdmin