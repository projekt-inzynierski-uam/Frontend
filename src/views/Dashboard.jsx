import { Sidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Group, Burger, Avatar } from '@mantine/core';

const Dashboard = () => {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 60, md: 70, lg: 80 }}}
      navbar={{
        width: { base: 150, md: 200, lg: 250, xl: 250 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
      withBorder={false}
    >
      <AppShell.Header bg="#E85A4F" p="md">
        <Group h="100%" px="md" justify='space-between' >
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header/>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md" bg="#E98074">
        <Sidebar/>
      </AppShell.Navbar>
      <AppShell.Main bg="#EAE7DC">
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  )
}

export default Dashboard
