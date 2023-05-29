import React, { useState } from 'react';
import LoginPage from './LoginPage';
import LoggedPage from './LoggedPage';

const App: React.FC = () => {
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  const handleLogin = (login: string) => {
    setLoggedInUser(login);
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div>
      {loggedInUser ? (
        <LoggedPage login={loggedInUser} onLogout={handleLogout} />
      ) : (
        <LoginPage onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
