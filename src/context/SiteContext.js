import React, { createContext, useState, useEffect } from 'react';
import { saveState, loadState } from '../helpers';

const siteStore = {
  quote: {},
  isSubmitting: false,
  success: false,
  quoteErrors: null,
}

export const SiteContext = createContext(siteStore)

const endPoint = `https://fed-challenge-api.sure.now.sh/api/v1/quotes`

const SiteProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [quoteErrors, setQuoteErrors] = useState(null)
  const [success, setSuccess] = useState(false)
  const [quote, setQuote] = useState(loadState('quote') || null)

  useEffect(() => {
    saveState('quote', quote)
  }, [quote])

  const submitQuote = async (payLoad) => {
    console.log('submitting load')
    setIsSubmitting(true)

    let response = await fetch(endPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payLoad)
    })
    let data = await response.json()
    setIsSubmitting(false)
    if (data.errors) setQuoteErrors(data.errors)
    if (data.quote) {
      setQuote(data.quote)
      setSuccess(true)
    }

    return
  }

  return (
    <SiteContext.Provider value={{
      ...siteStore,
      submitQuote,
      quoteErrors,
      isSubmitting,
      quote,
      success,
    }}>
      {children}
    </SiteContext.Provider>
  );
}

export default SiteProvider;