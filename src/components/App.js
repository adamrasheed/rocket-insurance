import React from 'react';
import SiteProvider from '../context/SiteContext';
import Routes from './Routes';


const App = () => {
  return (
    <SiteProvider>
      <Routes />
    </SiteProvider>
  );
}

export default App;