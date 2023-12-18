import { Center, Flex, ScrollArea } from '@mantine/core'
import CreateGroup from './modals/CreateGroup'
import { useState, useEffect } from 'react'
import GroupItem from './GroupItem'
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'

const MyGroups = () => {
    const [groups, setGroups] = useState(null)
    const userEmail = Cookies.get(CookieName.EMAIL)

    const getData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/groups/${userEmail}`)
          const json = await response.json()
          setGroups(json)
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
                <CreateGroup email={userEmail}/>
            </Center>
            <Flex
                direction="row"
                wrap="wrap"
            >
                {groups?.map((group) => (
                    <GroupItem key={group.id} group={group}/>
                ))}
            </Flex>
        </>
    )
}

export default MyGroups