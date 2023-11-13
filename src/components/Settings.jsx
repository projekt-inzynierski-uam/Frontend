import {useCookies} from 'react-cookie'
import {Link} from 'react-router-dom'

const Settings = () => {

    const [cookies, setCookie, removeCookie] = useCookies(null)

    const signOut = () => {
        removeCookie('Email')
        removeCookie('AuthToken')
        window.location.reload()
    }

    return (
        <>
            <Link to={"/dashboard"}><button className="signout" onClick={signOut}>WYLOGUJ SIĘ</button></Link>
        </>
    )
}

export default Settings