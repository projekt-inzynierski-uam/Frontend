import { RedirectButton } from './RedirectButton'
import { Paths } from '../routes/paths'
import { Text, Flex, Center } from '@mantine/core'

export const Sidebar = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap="xl"
        h="70%"
        p="md"
      >
        <Flex
          justify="center"
          align="center"
          direction="column"
          w="100%"
          gap="xs"
        >
          <Center>
            <Text p="xl" size="xl" c="white" w="100%" ff="Oswald">Zadania</Text>
          </Center>
          <RedirectButton path={Paths.DASHBOARD_TASKS} name={'Panel'} />
          <RedirectButton path={Paths.DASHBOARD_GROUPS} name={'Zarządzanie zadaniami'} />
          <RedirectButton path={Paths.DASHBOARD_GROUPS} name={'Zarządzanie celami'} />
        </Flex>

        <Flex
          justify="center"
          align="center"
          direction="column"
          w="100%"
          gap="xs"
        >
          <Center>
            <Text p="xl" size="xl" c="white" w="100%" ff="Oswald">Grupy</Text>
          </Center>
          <RedirectButton path={Paths.DASHBOARD_TASKS} name={'Zadania'} />
          <RedirectButton path={Paths.DASHBOARD_GROUPS} name={'Grupy'} />
          <RedirectButton path={Paths.DASHBOARD_GROUPS} name={'Grupy'} />
        </Flex>
      </Flex>
    </>
  )
}
