import RedirectButton from './RedirectButton';
import AppTitle from './AppTitle';
import '../styles/Sidebar.css';
import SettingsIcon from '../assets/settingsicon.png'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className="sidebar">
        <div className="sidebar-content">
          <AppTitle />
            <div className="menu-text">MENU</div>
            <div className="bar"></div>
            <RedirectButton to={"/dashboard/kalendarz"} text={"Kalendarz"}/>
            <RedirectButton to={"/dashboard/zadania"} text={"Zadania"}/>
            <RedirectButton to={"/dashboard/grupy"} text={"Grupy"}/>
            <div className="bar"></div>
        </div>
        <Link to={"/dashboard/ustawienia"}>
        <div className='settings-bar'>
              <img src={SettingsIcon} alt="icon for settings"/>
        </div>
        </Link>
      </div>
    </>
  );
};

export default Sidebar;