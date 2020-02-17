import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'

import { PATHS } from '../constants/constants';
import RatingPage from './RatingPage'
import QuotePage from './QuotePage'
import NotFoundPage from './NotFoundPage';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path={PATHS.LANDING} component={RatingPage} />
        <Route path={PATHS.QUOTE} component={QuotePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </Router>
  );
}

export default Routes;
