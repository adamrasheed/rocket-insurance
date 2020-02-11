import React, { createContext, useState, useEffect } from 'react';
import { saveState, loadState } from '../helpers';

const siteStore = {
  form: {},
  quote: {},
  isSubmitting: false,
  success: false,
  quoteErrors: null,
}

export const SiteContext = createContext(siteStore)

const endPoint = `https://fed-challenge-api.sure.now.sh/api/v1/quotes`

const SiteProvider = ({ children }) => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [quoteErrors, setQuoteErrors] = useState(
    loadState('quoteErrors') || {}
  )
  const [success, setSuccess] = useState(false)
  const [quote, setQuote] = useState(
    loadState('quote') || null
  )

  useEffect(() => {
    saveState('quote', quote)
  }, [quote])

  useEffect(() =>
    saveState('quoteErrors', quoteErrors),
    [quoteErrors])

  const submitQuote = async (payLoad) => {
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

    if (data.errors) {
      setQuoteErrors(data.errors)
    }
    if (data.quote) {
      setQuote(data.quote)
      setQuoteErrors({})
      setSuccess(true)
    }

    return
  }

  return (
    <SiteContext.Provider value={{
      ...siteStore,
      submitQuote,
      quoteErrors,
      setQuoteErrors,
      isSubmitting,
      quote,
      success,
    }}>
      {children}
    </SiteContext.Provider>
  );
}

export default SiteProvider;