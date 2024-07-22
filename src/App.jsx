// src/App.jsx
import React from 'react';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { RecoilRoot, useRecoilValue } from 'recoil';
import Header from './components/Header';
import DownloadPicture from './pages/DownloadPicture';
import FileCheck from './pages/FileCheck';
import Login from './pages/Login';
import UploadPicture from './pages/UploadPicture';
import { authState } from './store';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useRecoilValue(authState);

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

const App = () => {
  const isAuthenticated = useRecoilValue(authState);

  return (
    <RecoilRoot>
      <Router>
        <Header isAuthenticated={isAuthenticated} />
        <Switch>
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/download-picture" component={DownloadPicture} />
          <ProtectedRoute path="/upload-picture" component={UploadPicture} />
          <ProtectedRoute path="/file-check" component={FileCheck} />
          <Redirect from="/" to="/download-picture" />
        </Switch>
      </Router>
    </RecoilRoot>
  );
};

export default App;
