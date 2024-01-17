import { Group, Flex, Text, Button } from "@mantine/core"

const GroupTaskItemUser = ({task}) => {

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
                </Group>
            </Flex>
        </>
    )
}

export default GroupTaskItemUser