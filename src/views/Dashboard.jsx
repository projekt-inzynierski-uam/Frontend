import Sidebar from '../components/Sidebar'
import '../Dashboard.css'
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Auth from '../components/Auth';
import {useCookies} from 'react-cookie'
import '../index.css'

const Dashboard = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null)
  const userEmail = cookies.Email
  const authToken = cookies.AuthToken

  return (
    <>
    {!authToken && <Auth/>}
    {authToken &&
    <>
    <div className="dashboard">
      <Sidebar />
      <div className='header-main-wrapper'>
        <Header/>
        <div className="main-content">
          <Outlet/>
        </div>
      </div>
    </div>
    </>
    }
    </>
  );
};

export default Dashboard;
