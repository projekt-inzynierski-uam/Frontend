import { RedirectButton } from './RedirectButton'
import { Paths } from '../routes/paths'
import { Divider, Text, Flex } from '@mantine/core'

export const Sidebar = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap="md"
        h="100%"
      >
        <Text>Panel Główny</Text>
        <Divider size="md"/>
        <RedirectButton path={Paths.DASHBOARD_TASKS} name={'Zadania'} />
        <RedirectButton path={Paths.DASHBOARD_GROUPS} name={'Grupy'} />
      </Flex>
    </>
  )
}
