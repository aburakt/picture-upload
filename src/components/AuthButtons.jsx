import { Button } from 'primereact/button';
import React from 'react';
import { useAuth } from '../auth/AuthContext';

const AuthButtons = () => {
  const { login, logout, isAuthenticated } = useAuth();

  return (
    <div>
      {isAuthenticated ? (
        <Button label="Logout" icon="pi pi-sign-out" onClick={logout} />
      ) : (
        <Button label="Login" icon="pi pi-sign-in" onClick={login} />
      )}
    </div>
  );
};

export default AuthButtons;
