import { Grid, Title, Center } from '@mantine/core'
import TodayTasks from './TodayTasks'
import IncomingTasks from './IncomingTasks'
import ActiveObjective from './ActiveObjective'
import Cookies from 'js-cookie'
import { CookieName } from '../lib/constants/cookies'

const GroupPanel = () => {
    const userEmail = Cookies.get(CookieName.EMAIL)
    return(
        <>
            <Grid grow>
                <Grid.Col span={6}>
                </Grid.Col>
                <Grid.Col span={6}>
                    <ActiveObjective email={userEmail}/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <TodayTasks/>
                </Grid.Col>
                <Grid.Col span={6}>
                    <IncomingTasks/>
                </Grid.Col>
            </Grid>
        </>
    )
}

export default GroupPanel