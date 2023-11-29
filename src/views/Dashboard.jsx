import { Sidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

import { useDisclosure } from '@mantine/hooks';
import { AppShell, Group, Burger, Avatar } from '@mantine/core';

const Dashboard = () => {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{ height: { base: 40, md: 50, lg: 60 } }}
      navbar={{
        width: { base: 150, md: 200, lg: 200, xl: 250 },
        breakpoint: 'sm',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify='space-between'>
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Header/>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <Sidebar/>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet/>
      </AppShell.Main>
    </AppShell>
  )
}

export default Dashboard
