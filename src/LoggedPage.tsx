import React, { useEffect, useState } from 'react';
import { Paper, Button } from '@mantine/core';
import axios from 'axios';
import './LoggedPage.css';

interface User {
  id: number;
  login: string;
  // Add more fields as needed
}

interface LoggedPageProps {
  login: string;
  onLogout: () => void;
}

const LoggedPage: React.FC<LoggedPageProps> = ({ login, onLogout }) => {
  const [userData, setUserData] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log(login);
        const response = await axios.post(`http://localhost:8000/user`, {login:"testlogin"});
        if (response.status === 200) {
          const data = response.data[0];
          setUserData(data);
        } else {
          console.log("Blad logowania");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchUserData();
  }, [login]);

  return (
    <div className='logged-page'>
      <Paper shadow="sm" className='user-info'>
        {userData ? (
          <div>
            <h2>Welcome, {login}!</h2>
            {/* Display other user data */}
            <Button onClick={onLogout}>Logout</Button>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </Paper>
    </div>
  );
};

export default LoggedPage;
