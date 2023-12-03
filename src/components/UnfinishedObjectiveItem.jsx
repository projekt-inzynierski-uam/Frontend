import { Button, Group, Grid, Text } from "@mantine/core"

const UnfinishedObjectiveItem = (objective) => {
    return(
        <Grid>
            <Grid.Col span={8}>
                <Group>
                    <Text>{objective.title}</Text>
                    <Group>
                        <Text>{objective.current_points}/{objective.max_points}</Text>
                    </Group>
                </Group>
            </Grid.Col>
            <Grid.Col span={2}>
                <Button>Edytuj</Button>
            </Grid.Col>
            <Grid.Col span={2}>
                <Button>Usuń</Button>
            </Grid.Col>
        </Grid>
    )
}

export default UnfinishedObjectiveItem