import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import { PATHS } from '../../constants/constants';
import Rating from '../../pages/Rating'
import Quote from '../../pages/Quote'
import NotFound from '../../pages/NotFound';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={PATHS.LANDING} component={Rating} />
        <Route path={PATHS.QUOTE} component={Quote} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
