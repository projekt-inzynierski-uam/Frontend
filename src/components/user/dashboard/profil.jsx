import {Flex, Text} from '@mantine/core'
import Cookies from 'js-cookie'
import { CookieName } from '../../../lib/constants/cookies'

const userEmail = Cookies.get(CookieName.EMAIL)

const Profil = () => {
    return(
        <>
        <Flex
            justify='center'
            align='center'
            mih="600px"
        >
            <Text size='35px' c="#E98074">Witaj {userEmail}</Text>
        </Flex>
        </>
    )
}

export default Profil