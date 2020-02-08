import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Rating from './pages/Rating'
import Quote from './pages/Quote'
import './App.css';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Rating} />
        <Route path="/quote" component={Quote} />
      </Switch>
    </Router>
  );
}

export default Routes;
