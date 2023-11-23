import Sidebar from '../components/Sidebar'
import '../styles/Dashboard.css'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Auth from '../components/Auth';
import {useCookies} from 'react-cookie'
import '../styles/index.css'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className='header-main-wrapper'>
        <Header/>
        <div className="main-content">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
