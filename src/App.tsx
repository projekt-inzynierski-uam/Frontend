import React, { useState } from 'react';
import LoginPage from './LoginPage';
import LoggedPage from './LoggedPage';
import './App.css';

const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleLogin = (login: string) => {
    setLoggedInUser(login);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className='main-content'>
      {loggedInUser ? (
        <LoggedPage login={loggedInUser} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
