import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
} from 'react-router-dom'
import Rating from '../../pages/Rating'
import Quote from '../../pages/Quote'
import NotFound from '../../pages/NotFound';
import { SiteContext } from '../../store/SiteContext';
import { PATHS } from '../../constants/constants';

import '../../main.css';


function Routes() {
  const {
    state: {
      success,
      quote
    }
  } = useContext(SiteContext)
  return (
    <Router>
      <Switch>
        <Route path={PATHS.LANDING} exact>
          {success
            ? <Redirect to={PATHS.QUOTE} />
            : <Rating />
          }
        </Route>
        <Route path={PATHS.QUOTE}>
          {/* Protects against unwanted viewing of page */}
          {(quote && success)
            ? <Quote />
            : <Redirect to={PATHS.LANDING} />
          }
        </Route>
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default Routes;
