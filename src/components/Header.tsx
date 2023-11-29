import { Avatar, Menu, Text } from '@mantine/core'
import { AppTitle } from './AppTitle';
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Paths } from '../routes/paths'
import { CookieName } from '../lib/constants/cookies'

export const Header = () => {

  const navigate = useNavigate()

  const signOut = () => {
    Cookies.remove(CookieName.EMAIL)
    Cookies.remove(CookieName.AUTH_TOKEN)
    navigate(Paths.HOME)
  }

  return(
    <>
      <AppTitle/>
      <Menu shadow="md" width={200}>
        <Menu.Target>
          <Avatar variant="light" radius="xl" color="orange" src="" />
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
    </>
  )
}
