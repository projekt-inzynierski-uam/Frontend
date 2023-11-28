import '../styles/Dashboard.css'
import '../styles/index.css'

import { Sidebar } from '../components/Sidebar'
import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="header-main-wrapper">
        <Header />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
