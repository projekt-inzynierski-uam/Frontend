import { Group, Flex, Text, Button } from "@mantine/core"
import Cookies from 'js-cookie'
import { CookieName } from '../../../lib/constants/cookies'

const TaskItem = ({task, getData}) => {
    const userEmail = Cookies.get(CookieName.EMAIL)
    const DeleteTask = async () => {
        try{
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/deletetask/${task.id}`,{
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
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/finishtask/${userEmail}`,{
              method: 'PUT',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(data),
          })
          if(response.status === 200){
            DeleteTask()
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
                    <Text ta="center" pl="10px" size="lg" w="40%">{task.title}</Text>
                    <Text>Data:{task.day}/{task.month}/{task.year}</Text>
                    <Text>Punkty:{task.points}</Text>
                    <Group bg="#8E8D8A" miw="20%" maw="30%" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                        <Button onClick={() => FinishTask({points:task.points})} bg="#8E8D8A" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Zrobione</Button>
                    </Group>
                    <Group bg="#8E8D8A" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                      <Button onClick={DeleteTask} bg="#8E8D8A" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Usuń</Button>
                    </Group>
                </Group>
            </Flex>
        </>
    )
}

export default TaskItem