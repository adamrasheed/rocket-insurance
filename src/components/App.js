import React from 'react';
import SiteProvider from '../store/SiteContext';
import Routes from './Routes';

import '../main.css'

const App = () => {
  return (
    <SiteProvider>
      <Routes />
    </SiteProvider>
  );
}

export default App;