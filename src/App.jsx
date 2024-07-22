import 'primeflex/primeflex.css'; // PrimeFlex CSS for utility classes
import 'primeicons/primeicons.css'; // PrimeIcons CSS
import 'primereact/resources/primereact.min.css'; // Core PrimeReact CSS
import 'primereact/resources/themes/saga-blue/theme.css'; // Theme for PrimeReact
import React from 'react';
import AuthButtons from './components/AuthButtons';
import ProtectedComponent from './components/ProtectedComponent';

export default function App() {
  return (
    <>
      <div>App</div>
      <AuthButtons />
      <ProtectedComponent />
    </>
  )
}
