import { Group, Flex, Text, Button } from "@mantine/core"

const UserGroupTaskItem = ({task, getData}) => {
    const finishTask = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/finishtaskgroup/${task.id}`,{
            method: 'POST',
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
                    <Text size="16px">Wystawił:{task.whoassigned}</Text>
                    <Text size="16px">Punkty:{task.points}</Text>
                    <Button onClick={finishTask} bg="#8E8D8A" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Zatwierdź</Button>
                </Group>
            </Flex>
        </>
    )
}

export default UserGroupTaskItem