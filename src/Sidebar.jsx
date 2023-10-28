import React from 'react';
import RedirectButton from './RedirectButton';
import AppTitle from './AppTitle';
import './Sidebar.css';
import 'font-awesome/css/font-awesome.min.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <AppTitle />
        <div className="menu-text">MENU</div>
        <div className="bar"></div>
        <RedirectButton to="/calendar"><i style={{fontSize: "24px"}} class="fa">&#xf073;</i> Kalendarz</RedirectButton>
        <RedirectButton to="/task">Zadania</RedirectButton>
        <RedirectButton to="/groups">Grupy</RedirectButton>
        <div className="menu-text">Ostatnie</div>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Sidebar;