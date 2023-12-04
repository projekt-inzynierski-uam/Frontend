import { Grid, Title, Center } from '@mantine/core'
import TodayTasks from '../TaskManager/TodayTasks'
import IncomingTasks from '../TaskManager/IncomingTasks'
import ActiveObjective from './ActiveObjective'
import Cookies from 'js-cookie'
import { CookieName } from '../../lib/constants/cookies'

const TaskDashboard = () => {
    const userEmail = Cookies.get(CookieName.EMAIL)
    return(
        <>
            <Grid grow>
                <Grid.Col span={6}>
                    <Center>
                        <Title order={2} ff={"Oswald"} c='#8E8D8A'>12:25</Title>
                    </Center>
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

export default TaskDashboard