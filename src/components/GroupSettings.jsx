import { Flex, Button, Text, Group, TextInput } from '@mantine/core'
import { useLocation } from 'react-router-dom'
import { useForm } from '@mantine/form';

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

    const editGroupName = async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/changegroupname/${groupId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
        } catch (err) {
          console.error(err)
        }
    }

    const form = useForm({
        initialValues: {
          groupName: '',
        },

        validate: {
            groupName: (value) => (value.length > 25 || value.length < 1 ? 'Zła długość nazwy': null), 
        },
    })

    return(
        <>
        <Flex
            justify="center"
            align="center"
            mih={800}
            direction="column"
            gap='xl'
        >
            <Text size='35px' c="#E98074">Zmień nazwę grupy</Text>
            <Group>
                <Text c="#E98074" size='xl'>Nazwa Grupy:</Text>
                <form onSubmit={form.onSubmit((values) => editGroupName(values))}>
                    <Group>
                        <TextInput
                            {...form.getInputProps('groupName')}
                        />
                        <Button type="submit" h={50} style={{background: "#E98074", borderRadius:"20px"}}>
                            <Text size='xl'>Zmień</Text>
                        </Button>
                    </Group>
                </form>
            </Group>    
            <Button onClick={deleteGroup} w="25%" h={50} style={{borderRadius:"20px"}} bg="#8E8D8A">
                <Text size='xl'>Usuń grupę</Text>
            </Button>
        </Flex>
        </>
    )
}

export default GroupSettings