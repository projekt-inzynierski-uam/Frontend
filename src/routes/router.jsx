import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '../routes/components/ProtectedRoute'
import { Paths } from './paths'
import { Login } from '../views/login/Login'
import { Register } from '../views/register/Register'
import HomePage from '../views/HomePage'
import Dashboard from '../views/Dashboard'
import Settings from '../components/Settings'
import MyGroups from '../components/MyGroups'
import Invites from '../components/Invites'
import ObjectiveList from '../components/ObjectiveList'
import TaskDashboard from '../components/TaskDashboard'
import TaskManager from '../components/TaskManager'
import GroupDashboard from '../components/GroupDashboard'
import GroupUsers from '../components/GroupUsers'
import GroupSettings from '../components/GroupSettings'
import GroupTasks from '../components/GroupTasks'
import GroupObjectives from '../components/GroupObjectives'
import GroupPanel from '../components/GroupPanel'

export const router = createBrowserRouter([
  {
    path: Paths.HOME,
    element: <HomePage />,
  },
  {
    path: Paths.LOGIN,
    element: <Login />,
  },
  {
    path: Paths.REGISTER,
    element: <Register />,
  },
  {
    path: Paths.DASHBOARD,
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    children: [
      {
        path: Paths.DASHBOARD_MAIN,
        element: (
          <ProtectedRoute>
            <TaskDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_TASKS,
        element: (
          <ProtectedRoute>
            <TaskManager />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_OBJECTIVES,
        element: (
          <ProtectedRoute>
            <ObjectiveList />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_GROUPS,
        element: (
          <ProtectedRoute>
            <MyGroups />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_INVITES,
        element: (
          <ProtectedRoute>
            <Invites />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_GROUP_DASHBOARD,
        element: (
          <ProtectedRoute>
            <GroupDashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_GROUP_PANEL,
        element: (
          <ProtectedRoute>
            <GroupPanel />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_GROUP_TASKS,
        element: (
          <ProtectedRoute>
            <GroupTasks />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_GROUP_OBJECTIVES,
        element: (
          <ProtectedRoute>
            <GroupObjectives />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_GROUP_SETTINGS,
        element: (
          <ProtectedRoute>
            <GroupSettings />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_GROUP_USERS,
        element: (
          <ProtectedRoute>
            <GroupUsers />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_GROUP_SETTINGS,
        element: (
          <ProtectedRoute>
            <GroupSettings />
          </ProtectedRoute>
        ),
      },
      {
        path: Paths.DASHBOARD_SETTINGS,
        element: (
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        ),
      },
    ],
  },
])
