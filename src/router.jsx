import {createBrowserRouter} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute' //TODO
import HomePage from './views/HomePage'
import Dashboard from './views/Dashboard'
import Tasks from './components/Tasks'
import Calendar from './components/Calendar'
import Settings from './components/Settings'
import Groups from './components/Groups'
import GroupTasks from './components/GroupTasks'

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
        children: [
            {
                path: "/dashboard/kalendarz",
                element: <Calendar/>
            },
            {
                path: "/dashboard/zadania",
                element: <Tasks/>
            },
            {
                path: "/dashboard/grupy",
                element: <Groups/>,
            },
            {
                path: "/dashboard/grupy/:idGrupy",
                element: <GroupTasks/>
            },
            {
                path: "/dashboard/ustawienia",
                element: <Settings/>
            }
        ]
    }
])

export default router