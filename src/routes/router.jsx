import { createBrowserRouter } from 'react-router-dom'
import { ProtectedRoute } from '../routes/components/ProtectedRoute'
import { Paths } from './paths'

import HomePage from '../views/HomePage'
import Dashboard from '../views/Dashboard'
import Tasks from '../components/Tasks'
import Calendar from '../components/Calendar'
import Settings from '../components/Settings'
import Groups from '../components/Groups'
import GroupTasks from '../components/GroupTasks'
import Auth from '../components/Auth'

export const router = createBrowserRouter([
    {
        path: Paths.HOME,
        element: <HomePage />
    },
    {
        path: Paths.LOGIN,
        element: <Auth />
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
                path: Paths.DASHBOARD_CALENDAR,
                element: (
                    <ProtectedRoute>
                        <Calendar />
                    </ProtectedRoute>
                )
            },
            {
                path: Paths.DASHBOARD_TASKS,
                element: (
                    <ProtectedRoute>
                        <Tasks />
                    </ProtectedRoute>
                )
            },
            {
                path: Paths.DASHBOARD_GROUPS,
                element: (
                    <ProtectedRoute>
                        <Groups />,
                    </ProtectedRoute>
                )
            },
            {
                path: Paths.DASHBOARD_GROUP_PAGE,
                element: (
                    <ProtectedRoute> 
                        <GroupTasks />
                    </ProtectedRoute>
                )
            },
            {
                path: Paths.DASHBOARD_SETTINGS,
                element: (
                    <ProtectedRoute> 
                        <Settings />
                    </ProtectedRoute>
                )
            }
        ]
    }
])
