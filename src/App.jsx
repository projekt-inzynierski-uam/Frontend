import { RouterProvider } from 'react-router-dom'
import './styles/index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

//@ts-ignore
import { router } from './routes/router'

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  )
}

export default App
