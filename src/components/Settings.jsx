import {useCookies} from 'react-cookie'
import {Link} from 'react-router-dom'

const Settings = () => {

    const [cookies, setCookie, removeCookie] = useCookies(null)

    const signOut = () => {
        removeCookie('Email')
        removeCookie('AuthToken')
    }

    return (
        <>
            <Link to={"/dashboard"}><p><button className="signout" onClick={signOut}>WYLOGUJ SIĘ</button></p></Link>
        </>
    )
}

export default Settings