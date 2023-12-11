import {Flex, ScrollArea, Title, Center, Button, Modal} from '@mantine/core'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'
import FinishedObjectiveItem from './FinishedObjectiveItem'

const FinishedObjectives = () => {
    const [finishedObjectives, setfinishedObjectives] = useState(null)
    const userEmail = Cookies.get(CookieName.EMAIL)

    const getData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/finishedobjectives/${userEmail}`)
          const json = await response.json()
          setfinishedObjectives(json)
        } catch (err) {
          console.error(err)
        }
    }
    
    useEffect(() => {
        getData()
    }, [finishedObjectives])

    return (
        <>
            <Center>
                <Title order={2} ff={"Oswald"} c='#8E8D8A'>Skończone cele</Title>
            </Center>
            <Flex
                mih="600"
                gap="0"
                justify="flex-start"
                align="flex-start"
                direction="column"
                style={{border:"7px solid #E98074", borderRadius:"50px"}}
            >
                <ScrollArea w="100%" h={600} offsetScrollbars style={{borderRadius:"50px"}}>
                    {finishedObjectives?.map((finishedObjective) => (
                        <FinishedObjectiveItem key={finishedObjective.id} objective={finishedObjective} getData={getData}/>
                    ))}
                </ScrollArea>
            </Flex>
        </>
    )
}

export default FinishedObjectives