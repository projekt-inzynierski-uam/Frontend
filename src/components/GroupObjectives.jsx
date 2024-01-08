import { Grid } from '@mantine/core'
import UnfinishedObjectivesGroup from './UnfinishedObjectivesGroup'
import FinishedObjectives  from './FinishedObjectives'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'
import { useLocation } from 'react-router-dom'

const GroupObjectives = () => {
    const [unfinishedObjectives, setUnfinishedObjectives] = useState(null)
    const [finishedObjectives, setfinishedObjectives] = useState(null)
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
    
    const getDataFinished = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/finishedobjectivesgroup/${groupId}`)
          const json = await response.json()
          setfinishedObjectives(json)
        } catch (err) {
          console.error(err)
        }
    }

    const getData = async () => {
        getDataUnfinished(),
        getDataFinished()
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Grid>
            <Grid.Col span={6}>
                <UnfinishedObjectivesGroup unfinishedObjectives={unfinishedObjectives} userEmail={userEmail} groupId={groupId} getData={getData}/>
            </Grid.Col>
            <Grid.Col span={6}>
                <FinishedObjectives finishedObjectives={finishedObjectives} getData={getData}/>
            </Grid.Col>
        </Grid>
    )
}

export default GroupObjectives