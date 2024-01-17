import { Grid, Flex, Text } from '@mantine/core'
import UnfinishedObjectivesGroup from './UnfinishedObjectivesGroup'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { CookieName } from '../../../lib/constants/cookies'
import { useLocation } from 'react-router-dom'
import AllObjectives from './AllObjectives'

const GroupObjectives = () => {
    const [permission, setPermission] = useState(false)
    const [unfinishedObjectives, setUnfinishedObjectives] = useState(null)
    const [users, setUsers] = useState([])
    const userEmail = Cookies.get(CookieName.EMAIL)
    const location = useLocation()
    const { groupId } = location.state

    const getDataUnfinished = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/unfinishedobjectivesgroup/${groupId}`)
          const json = await response.json()
          setUnfinishedObjectives(json)
        } catch (err) {
          console.error(err)
        }
    }

    const getUsers = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_DBSERVER}/groupusers/${groupId}`)
            const json = await response.json()
            setUsers(json)
        } catch (err) {
          console.error(err)
        }
    }

    const getData = async () => {
        getDataUnfinished(),
        getUsers()
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

    return (
        <>
        {permission &&
        <Grid>
            <Grid.Col span={6}>
                <UnfinishedObjectivesGroup unfinishedObjectives={unfinishedObjectives} userEmail={userEmail} groupId={groupId} getData={getData}/>
            </Grid.Col>
            <Grid.Col span={6}>
                <AllObjectives unfinishedObjectives={unfinishedObjectives} groupId={groupId} getData={getData} users={users}/>
            </Grid.Col>
        </Grid>
        }
        {!permission &&
            <Flex
                justify='center'
                align='center'
                mih='600px'
            >
                <Text size='30px'>Nie masz uprawnień</Text>
            </Flex>
        }
        </>
    )
}

export default GroupObjectives