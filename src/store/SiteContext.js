import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { saveState, loadState } from '../helpers';
import { siteReducer } from './reducer';
import {
  INITIAL_FORM_ERRORS,
  INITIAL_FORM_VALUES
} from '../constants/constants';

export const initialStore = {
  form: INITIAL_FORM_VALUES,
  quote: {},
  isSubmitting: false,
  success: false,
  errors: INITIAL_FORM_ERRORS,
}

export const SiteContext = createContext(initialStore)

const SiteProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    siteReducer,
    loadState('state') || initialStore,
  )

  useEffect(() => {
    saveState('state', state)
  }, [state])

  const contextValue =
    useMemo(
      () => ({ state, dispatch }),
      [state, dispatch]
    )

  return (
    <SiteContext.Provider
      value={contextValue}
      dispatch={dispatch}
    >
      {children}
    </SiteContext.Provider>
  );
}

export default SiteProvider;