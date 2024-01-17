import { Button, Group, Flex, Text, Modal } from "@mantine/core"
import { useDisclosure } from '@mantine/hooks';
import EditObjectiveModalgroup from "../../modals/EditObjectiveModalGroup";
import EditObjectiveModalGroup from "../../modals/EditObjectiveModalGroup";

const UnfinishedObjectiveGroupItem = ({objective, getData}) => {
    const [opened, { close }] = useDisclosure(false);

    const deleteObjective = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/deletegroupobjective/${objective.id}`,{
            method: 'DELETE',
        })
        getData()
        }catch(err){
          console.error(err)
        }
    }

    return(
        <>
            <Modal opened={opened} onClose={close} title="Edytuj Cel" centered>
                
            </Modal>
            <Flex
                gap="2px"
                justify="center"
                align="center"
                direction="row"
                p="xs"
                w="100%"
            >
                <Group c="#FFF5F3" bg="#E98074" w="100%"style={{borderRadius:"50px", height:"40px"}} ff={"Oswald"}>
                    <Text ta="center" pl="10px" size="lg" w="30%">{objective.title}</Text>
                    <Group bg="#8E8D8A" miw="20%" maw="50%" style={{borderRadius:"200px"}} ff={"Oswald"} justify="center">
                        <Text>{objective.current_points}/{objective.max_points}</Text>
                    </Group>
                    <Text>Utworzony przez:{objective.createdby}</Text>
                </Group>
                <EditObjectiveModalGroup objective={objective} getData={getData}/>
                <Button onClick={deleteObjective} bg="#8E8D8A" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Usuń</Button>
            </Flex>
        </>
    )
}

export default UnfinishedObjectiveGroupItem