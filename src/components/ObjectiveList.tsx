import { Grid } from '@mantine/core'
import UnfinishedObjectives from './UnfinishedObjectives'
import FinishedObjectives  from './FinishedObjectives'

const ObjectiveList = () => {
    return (
        <Grid>
            <Grid.Col span={6}>
                <UnfinishedObjectives/>
            </Grid.Col>
            <Grid.Col span={6}>
                <FinishedObjectives/>
            </Grid.Col>
        </Grid>
    )
}

export default ObjectiveList