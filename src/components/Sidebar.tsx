import { Link } from 'react-router-dom'
import '../styles/Sidebar.css'

import { RedirectButton } from './RedirectButton'
import { AppTitle } from './AppTitle'
import { Paths } from '../routes/paths'
import SettingsIcon from '../assets/settingsicon.png'

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-content">
          <AppTitle />
          <div className="menu-text">Panel główny</div>
          <div className="bar"></div>
          <RedirectButton path={Paths.DASHBOARD_TASKS} name={'Zadania'} />
          <RedirectButton path={Paths.DASHBOARD_GROUPS} name={'Grupy'} />
          <div className="bar"></div>
        </div>
        <Link to={'/dashboard/ustawienia'}>
          <div className="settings-bar">
            <img src={SettingsIcon} alt="icon for settings" />
          </div>
        </Link>
      </div>
    </>
  )
}
