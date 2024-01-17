import { Avatar, Menu, Text, Group } from '@mantine/core'
import { Logo } from './Logo';
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { Paths } from '../../../routes/paths'
import { CookieName } from '../../../lib/constants/cookies'

export const HeaderContent = () => {

  const anchorStyles = {
    textDecoration: 'none',
  }

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
              <Link to={'/dashboard/profil'} style={anchorStyles}><Text c="black" ff="Oswald" fz="xl">Profil</Text></Link>
            </Menu.Item>
            <Menu.Item>
              <Text onClick={signOut} fz="xl">Wyloguj się</Text>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
        <Text c="white" size='22px'>Konto</Text>
      </Group>
    </>
  )
}
