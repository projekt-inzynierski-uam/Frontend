import {createBrowserRouter} from 'react-router-dom'
import HomePage from './views/HomePage'
import Dashboard from './views/Dashboard'
import Tasks from './components/Tasks'
import Calendar from './components/Calendar'
import Settings from './components/Settings'


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
                path: "/dashboard/zadania",
                element: <Tasks/>
            },
            {
                path: "/dashboard/kalendarz",
                element: <Calendar/>
            },
            {
                path: "/dashboard/ustawienia",
                element: <Settings/>
            }
        ]
    }
])

export default router