import React from 'react';
//import Calendar from './Calendar';
import Sidebar from './Sidebar';
import RedirectButton from './RedirectButton';
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="main-content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Dashboard;
