import {Flex, ScrollArea, Title, Center} from '@mantine/core'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'
import UnfinishedObjectiveItem from './UnfinishedObjectiveItem'

const UnfinishedObjectives = () => {
    const [unfinishedObjectives, setUnfinishedObjectives] = useState(null)
    const userEmail = Cookies.get(CookieName.EMAIL)

    const getData = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/unfinishedobjectives/${userEmail}`)
          const json = await response.json()
          setUnfinishedObjectives(json)
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
            <Title order={2} ff={"Oswald"} c='#8E8D8A'>Nieskończone cele</Title>
            </Center>
            <Flex
                mih="600"
                gap="md"
                justify="flex-start"
                align="flex-start"
                direction="column"
                style={{border:"7px solid #E98074", borderRadius:"50px"}}
            >
                    {unfinishedObjectives?.map((unfinishedObjective) => (
                        <UnfinishedObjectiveItem key={unfinishedObjective.id} objective={unfinishedObjective}/>
                    ))}
            </Flex>
        </>
    )
}

export default UnfinishedObjectives