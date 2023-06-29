import {createBrowserRouter} from 'react-router-dom'
import HomePage from './HomePage'
import App from "./App"

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/app",
        element: <App/>
    }
])

export default router