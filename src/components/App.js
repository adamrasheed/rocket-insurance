import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'

import Routes from './Routes';
import { siteReducer } from '../store/siteReducer';
import { loadState, saveState } from '../helpers';

import '../main.css'

const persistedState = loadState()
const composedEnhancers = compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
)

const store = createStore(
  siteReducer,
  persistedState,
  composedEnhancers,
)

store.subscribe(() => {
  saveState(store.getState())
})

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;