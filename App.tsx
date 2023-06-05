import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import LandingPage from './src/pages/LandingPage';
import LoginPage from './src/pages/LoginPage';
import './App.css'

function App() {
  return (
  <BrowserRouter>
      <Routes>
      <Route path="/"  element={<LandingPage />}/>
      <Route path="/login"  element={<LoginPage />}/>
      </Routes>
  </BrowserRouter>
  );
}

export default App
