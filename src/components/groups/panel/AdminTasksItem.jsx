import { Group, Flex, Text, Button } from "@mantine/core"

const AdminTasksItem = ({task, getData}) => {
    const DeleteTaskGroup = async () => {
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

    const accepttask = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/accepttask/${task.id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
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
                <Group c="#FFF5F3" bg="#E98074" w="100%"style={{borderRadius:"50px", height:"40px"}} ff={"Oswald"}>
                    <Text ta="center" pl="10px" size="lg" w="30%">{task.title}</Text>
                    <Text size="16px">Data:{task.day_date}/{task.month_date}/{task.year_date}</Text>
                    <Text size="16px">Punkty:{task.points}</Text>
                    <Group bg="#8E8D8A" miw="20%" maw="30%" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                        <Button onClick={accepttask} bg="#8E8D8A" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Zrobione</Button>
                    </Group>
                    <Group bg="#8E8D8A" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                      <Button onClick={DeleteTaskGroup} bg="#8E8D8A" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Usuń</Button>
                    </Group>
                </Group>
            </Flex>
        </>
    )
}

export default AdminTasksItem