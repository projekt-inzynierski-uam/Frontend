import React, { useState } from 'react';
import { TextInput, Button, Paper } from '@mantine/core';
import axios from 'axios';

interface LoginForm {
  login: string;
  password: string;
}

interface LoginPageProps {
  onLogin: (login: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [loginForm, setLoginForm] = useState<LoginForm>({
    login: '',
    password: '',
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setLoginForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/login', loginForm);

      if (response.status === 200) {
        onLogin(loginForm.login);
      } else {
        console.log("Blad logowania");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Paper shadow="sm" style={{ maxWidth: 400, width: '100%' }}>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Login"
            name="login"
            type="text"
            value={loginForm.login}
            onChange={handleInputChange}
            required
          />

          <TextInput
            label="Password"
            name="password"
            type="password"
            value={loginForm.password}
            onChange={handleInputChange}
            required
          />

          <Button type="submit" fullWidth>
            Login
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default LoginPage;
