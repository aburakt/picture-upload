import 'primeflex/primeflex.css'; // PrimeFlex CSS for utility classes
import 'primeicons/primeicons.css'; // PrimeIcons CSS
import 'primereact/resources/primereact.min.css'; // Core PrimeReact CSS
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme for PrimeReact
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
)
