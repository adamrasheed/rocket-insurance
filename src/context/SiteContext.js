import React, { createContext, useState, useEffect } from 'react';
import { saveState, loadState } from '../helpers';

const initialFormValues = {
  first_name: '',
  last_name: '',
  address: {
    line_1: '',
    line_2: '',
    city: '',
    region: '',
    postal: '',
  }
}

const siteStore = {
  formData: {
    ...initialFormValues,
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

export const SiteContext = createContext(siteStore)

const endPoint = `https://fed-challenge-api.sure.now.sh/api/v1/quotes`

const SiteProvider = ({ children }) => {
  const [formData, setFormData] = useState(siteStore.formData)
  const [isSubmitting, setIsSubmitting] = useState(loadState('quoteError') || false)
  const [quoteErrors, setQuoteErrors] = useState(
    siteStore.quoteErrors
  )
  const [success, setSuccess] = useState(false)
  const [quote, setQuote] = useState(
    loadState('quote') || null
  )

  useEffect(() => {
    saveState('quote', quote)
  }, [formData, quote])

  const submitQuote = async () => {
    setIsSubmitting(true)

    try {
      let response = await fetch(endPoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()
      console.log(data)
      if (data.quote) {
        setQuote(data.quote)
        setQuoteErrors(siteStore.quoteErrors)
        setSuccess(true)
      }
      if (data.errors) {
        setQuote({})
        setQuoteErrors({
          ...quoteErrors,
          ...data.errors
        })
      }
      setIsSubmitting(false)

    } catch (error) {
      console.log(error)
    }
    return
  }

  return (
    <SiteContext.Provider value={{
      ...siteStore,
      submitQuote,
      // quoteErrors,
      // setQuoteErrors,
      isSubmitting,
      formData,
      setFormData,
      quote,
      success,
    }}>
      {children}
    </SiteContext.Provider>
  );
}

export default SiteProvider;