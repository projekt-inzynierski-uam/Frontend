import { RedirectButton } from './RedirectButton'
import { Paths } from '../routes/paths'
import { Flex, Center, Divider, Title } from '@mantine/core'
import PanelIcon from '../assets/panelicon.svg'
import ZadaniaIcon from '../assets/menedzerzadan.svg'
import CeleIcon from '../assets/cele.svg'

export const Sidebar = () => {
  return (
    <>
      <Flex
        justify="center"
        align="center"
        direction="column"
        gap="xl"
        h="70%"
      >
        <Flex
          justify="center"
          align="center"
          direction="column"
          w="100%"
          gap="xs"
        >
          <Center>
            <Title order={1} c="white" ff="Oswald">Zadania</Title>
          </Center>
          <RedirectButton path={Paths.DASHBOARD_MAIN} name={'Panel'} icon={PanelIcon}/>
          <RedirectButton path={Paths.DASHBOARD_TASKS} name={'Zarządzanie zadaniami'} icon={ZadaniaIcon}/>
          <RedirectButton path={Paths.DASHBOARD_OBJECTIVES} name={'Zarządzanie celami'} icon={CeleIcon}/>
        </Flex>
        <Divider size="lg"/>
        <Flex
          justify="center"
          align="center"
          direction="column"
          w="100%"
          gap="xs"
        >
          <Center>
            <Title order={1} c="white" ff="Oswald">Grupy</Title>
          </Center>
          <RedirectButton path={Paths.DASHBOARD_GROUPS} name={'Moje grupy'} icon={CeleIcon}/>
          <RedirectButton path={Paths.DASHBOARD_INVITES} name={'Zaproszenia'} icon={CeleIcon}/>
        </Flex>
      </Flex>
    </>
  )
}
