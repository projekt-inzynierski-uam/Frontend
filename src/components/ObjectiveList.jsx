import { Grid } from '@mantine/core'
import UnfinishedObjectives from './UnfinishedObjectives'
import FinishedObjectives  from './FinishedObjectives'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'

const ObjectiveList = () => {
    const [unfinishedObjectives, setUnfinishedObjectives] = useState(null)
    const [finishedObjectives, setfinishedObjectives] = useState(null)
    const userEmail = Cookies.get(CookieName.EMAIL)

    const getDataUnfinished = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/unfinishedobjectives/${userEmail}`)
          const json = await response.json()
          setUnfinishedObjectives(json)
        } catch (err) {
          console.error(err)
        }
    }
    
    const getDataFinished = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/finishedobjectives/${userEmail}`)
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
                <UnfinishedObjectives unfinishedObjectives={unfinishedObjectives} userEmail={userEmail} getData={getData}/>
            </Grid.Col>
            <Grid.Col span={6}>
                <FinishedObjectives finishedObjectives={finishedObjectives} getData={getData}/>
            </Grid.Col>
        </Grid>
    )
}

export default ObjectiveList