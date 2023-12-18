import { Flex, ScrollArea, Title, Center } from '@mantine/core'
import { useLocation } from 'react-router-dom'
import AddUserToGroup  from './modals/AddUserToGroup'
import { useState, useEffect } from 'react'
import GroupUserItem from './GroupUserItem'

const GroupUsers = () => {
    const location = useLocation()
    const { groupId, groupName } = location.state
    const [users, setUsers] = useState(null)
    const getData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/groupusers/${groupId}`)
          const json = await response.json()
          setUsers(json)
        } catch (err) {
          console.error(err)
        }
    }
    
    useEffect(() => {
        getData()
    }, [])

    return(
        <>
            <Center>
                <Title order={2} ff={"Oswald"} c='#8E8D8A'>Lista użytkowników grupy "{groupName}"</Title>
            </Center>
            <Center>
                <Flex
                    w="70%"
                    mih="600"
                    gap="0"
                    justify="flex-start"
                    align="flex-start"
                    direction="column"
                    style={{border:"7px solid #E98074", borderRadius:"50px"}}
                >
                    <ScrollArea w="100%" h={600} offsetScrollbars style={{borderRadius:"50px"}}>
                        {users?.map((user) => (
                            <GroupUserItem key={user.email} groupId={groupId} user={user}/>
                        ))}
                    </ScrollArea>
                </Flex>
            </Center>
            <Center>
                <AddUserToGroup groupId={groupId}/>
            </Center>
        </>
    )
}

export default GroupUsers