import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuthUrl, getToken, getUserInfo } from '../service/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const handleCallback = async () => {
      const urlParams = new URLSearchParams(window.location.search);
      const code = urlParams.get('code');
      if (code) {
        const tokenData = await getToken(code);
        setToken(tokenData.access_token);
        const userInfo = await getUserInfo(tokenData.access_token);
        setUser(userInfo);
        setIsAuthenticated(true);
        window.history.replaceState({}, document.title, '/');
      }
    };
    handleCallback();
  }, []);

  const login = () => {
    window.location.href = getAuthUrl();
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
