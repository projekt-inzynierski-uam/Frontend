import React from 'react';
import './Topbar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="app-name">Sortorio</div>
      <button className="account-button">Konto</button>
    </div>
  );
};

export default TopBar;
