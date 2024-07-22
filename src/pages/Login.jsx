// src/pages/Login.jsx
import axios from 'axios';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { authState } from '../store';

const Login = () => {
  const [auth, setAuth] = useRecoilState(authState);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    axios.post('/auth/login', { username, password })
      .then((response) => {
        setAuth(true);
      })
      .catch((error) => {
        // Handle login error
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="p-4 border rounded shadow-lg">
        <h2>Login</h2>
        <div className="my-2">
          <InputText
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="my-2">
          <InputText
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <Button label="Login" icon="pi pi-sign-in" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
