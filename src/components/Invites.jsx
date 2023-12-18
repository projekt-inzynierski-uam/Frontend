import { Flex, ScrollArea, Title, Center } from '@mantine/core'
import InviteItem from './InviteItem'
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'
import { useState, useEffect } from 'react'

const Invites = () => {
    const [invites, setInvites] = useState(null)
    const userEmail = Cookies.get(CookieName.EMAIL)

    const getData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/invites/${userEmail}`)
          const json = await response.json()
          setInvites(json)
        } catch (err) {
          console.error(err)
        }
    }
    
    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <Center>
                <Title order={2} ff={"Oswald"} c='#8E8D8A'>Zaproszenia do Grup</Title>
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
                        {invites?.map((invite) => (
                            <InviteItem key={invite.id} group={invite} email={userEmail}/>
                        ))}
                    </ScrollArea>
                </Flex>
            </Center>
        </>
    )
}

export default Invites