// src/components/Header.jsx
import { Button } from 'primereact/button';
import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '../store';

const Header = ({ isAuthenticated, onLogout }) => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-10" />
        <span className="ml-4 text-xl">My Mini Web App</span>
      </div>
      <nav className="flex items-center">
        <Button label="Download Picture" className="p-button-text" />
        <Button label="Upload Picture" className="p-button-text ml-4" />
        <Button label="File Check" className="p-button-text ml-4" />
        {isAuthenticated && (
          <Button
            icon="pi pi-sign-out"
            className="p-button-text ml-4"
            onClick={onLogout}
          />
        )}
        <Button
          icon={theme === 'light' ? 'pi pi-sun' : 'pi pi-moon'}
          className="p-button-text ml-4"
          onClick={toggleTheme}
        />
      </nav>
    </header>
  );
};

export default Header;
