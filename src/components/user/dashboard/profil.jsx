import {Flex, Text} from '@mantine/core'
import Cookies from 'js-cookie'
import { CookieName } from '../../../lib/constants/cookies'

const Profil = () => {
    const userEmail = Cookies.get(CookieName.EMAIL)

    return(
        <>
        <Flex
            justify='center'
            align='center'
            mih="600px"
        >
            <Text size='35px' c="black">Witaj {userEmail}</Text>
        </Flex>
        </>
    )
}

export default Profil