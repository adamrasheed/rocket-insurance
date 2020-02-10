import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom'

import Rating from '../pages/Rating'
import Quote from '../pages/Quote'

import '../App.css';
import { SiteContext } from '../context/SiteContext';
import { PATHS } from '../constants';

function Routes() {
  const { success } = useContext(SiteContext)
  return (
    <Router>
      <Switch>
        <Route path={PATHS.LANDING} exact>
          {success ? <Redirect to={PATHS.QUOTE} /> : <Rating />}
        </Route>
        <Route path={PATHS.QUOTE} component={Quote} />
      </Switch>
    </Router>
  );
}

export default Routes;
