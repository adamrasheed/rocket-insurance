import React, {
  createContext,
  useEffect,
  useMemo,
  useReducer,
} from 'react';
import { saveState, loadState } from '../helpers';
import { siteReducer } from '../reducer';

export const initialStore = {
  form: {
    first_name: '',
    last_name: '',
    address: {
      line_1: '',
      line_2: '',
      city: '',
      region: '',
      postal: '',
    }
  },
  quote: {},
  isSubmitting: false,
  success: false,
  quoteErrors: {
    first_name: false,
    last_name: false,
    address: {
      line_1: false,
      line_2: false,
      city: false,
      region: false,
      postal: false,
    }
  },
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