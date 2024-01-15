import { Flex, ScrollArea, Text, Center } from '@mantine/core'
import { useLocation } from 'react-router-dom'
import AddUserToGroup  from './modals/AddUserToGroup'
import { useState, useEffect } from 'react'
import GroupUserItem from './GroupUserItem'
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'

const GroupUsers = () => {
    const [permission, setPermission] = useState(false)
    const location = useLocation()
    const { groupId, groupName } = location.state
    const [users, setUsers] = useState(null)
    const userEmail = Cookies.get(CookieName.EMAIL)
    const getData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/groupusers/${groupId}`)
          const json = await response.json()
          setUsers(json)
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
        getData(),
        getPermission()
    }, [])

    return(
        <>
            <Center>
                <Text size='40px' ff={"Oswald"} c='#8E8D8A'>Lista użytkowników grupy "{groupName}"</Text>
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
                            <GroupUserItem key={user.user_email} groupId={groupId} user={user} permission={permission}/>
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