import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '../routes/components/ProtectedRoute'
import { Paths } from './paths'
import { Login } from '../views/login/Login'
import { Register } from '../views/register/Register'

import HomePage from '../views/HomePage'
import Dashboard from '../views/Dashboard'
import Settings from '../components/Settings'
import { Groups } from '../components/groups'
import { GroupTasks } from '../components/groups/components/GroupTasks'
import ObjectiveList from '../components/ObjectiveList'
import TaskDashboard from '../components/TaskDashboard'
import TaskManager from '../components/TaskManager'

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
            <Groups />
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
