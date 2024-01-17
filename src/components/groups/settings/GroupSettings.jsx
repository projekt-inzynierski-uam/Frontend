import { Flex, Button, Text, Group, TextInput } from '@mantine/core'
import { useLocation } from 'react-router-dom'
import { useForm } from '@mantine/form';
import Cookies from 'js-cookie'
import { CookieName } from '../../../lib/constants/cookies'
import { useState, useEffect } from 'react'

const GroupSettings = () => {
    const [permission, setPermission] = useState(false)
    const [groupName, setGroupName] = useState([{name:"brak danych"},{name:"brak danych"}])
    const location = useLocation()
    const { groupId } = location.state
    const userEmail = Cookies.get(CookieName.EMAIL)

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
          getGroupName()
        } catch (err) {
          console.error(err)
        }
    }

    const getGroupName = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/getgroupname/${groupId}`)
          const json = await response.json()
          setGroupName(json)
        } catch (err) {
          console.error(err)
        }
    }

    const getPermission = async () => {
        try{
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/getpermission/${userEmail}`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({groupId: groupId}),
        })
        const json = await response.json()
        setPermission(json)
        }catch(err){
          console.error(err)
        }
    }

    useEffect(() => {
        getPermission(),
        getGroupName()
    }, [])

    const form = useForm({
        initialValues: {
          groupName: '',
        },

        validate: {
            groupName: (value) => (value.length > 25 || value.length < 1 ? 'Zła długość nazwy': null), 
        },
    })
    if(!permission){
        return(
            <Flex
                align="center"
                justify="center"
                mih={800}
            >
                <Text size='32px'>Nie masz uprawnień</Text>
            </Flex>
        )
    }else{
        return(
            <>
            <Flex
                justify="center"
                align="center"
                mih={800}
                direction="column"
                gap='xl'
            >
                <Text size='35px' c="#E98074">Nazwa grupy:"{groupName[0].name}"</Text>
                <Text size='35px' c="#E98074">Zmień nazwę grupy</Text>
                <Group>
                    <Text c="#E98074" size='xl'>Nowa nazwa grupy:</Text>
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
}

export default GroupSettings