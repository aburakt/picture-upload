// src/App.jsx
import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import Header from './components/Header';
import DownloadPicture from './pages/DownloadPicture';
import FileCheck from './pages/FileCheck';
import Login from './pages/Login';
import UploadPicture from './pages/UploadPicture';
import { authState } from './store';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useRecoilValue(authState);

  return isAuthenticated ? (
    <Component {...rest} />
  ) : (
    <Navigate to="/login" replace />
  );
};

const App = () => {
  const isAuthenticated = useRecoilValue(authState);

  return (
    <Router>
      <Header isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/download-picture" element={<ProtectedRoute component={DownloadPicture} />} />
        <Route path="/upload-picture" element={<ProtectedRoute component={UploadPicture} />} />
        <Route path="/file-check" element={<ProtectedRoute component={FileCheck} />} />
        <Route path="*" element={<Navigate to="/download-picture" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
