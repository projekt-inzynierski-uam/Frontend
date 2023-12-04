import { Avatar, Menu, Text, Group } from '@mantine/core'
import { Logo } from './Logo';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Paths } from '../routes/paths'
import { CookieName } from '../lib/constants/cookies'

export const HeaderContent = () => {

  const navigate = useNavigate()

  const signOut = () => {
    Cookies.remove(CookieName.EMAIL)
    Cookies.remove(CookieName.AUTH_TOKEN)
    navigate(Paths.LOGIN)
  }

  return(
    <>
      <Logo/>
      <Group>
        <Menu shadow="md" width={200}>
          <Menu.Target>
            <Avatar variant="light" color="white" radius="xl"/>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item>
              <Text>Profil</Text>
            </Menu.Item>
            <Menu.Item>
              <Text>Ustawienia</Text>
            </Menu.Item>
            <Menu.Item>
              <Text onClick={signOut}>Wyloguj się</Text>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Text c="white">Konto</Text>
      </Group>
    </>
  )
}
