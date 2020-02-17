import {
  FORM_UPDATE,
  IS_SUBMITTING,
  SUCCESS,
  QUOTE_UPDATE,
  ERRORS_SUBMIT,
  ERRORS_UPDATE,
  ERRORS_CLEAR,
} from "./actionTypes";
import { API_ENDPOINT } from "../constants/constants";

export const submitForm = (e, form) => {
  e.preventDefault()
  return async dispatch => {
    dispatch(isSubmitting(true))

    function onSuccess(quote) {
      dispatch(updateQuote(quote))
      dispatch(clearAllErrors())
      dispatch(setSuccess(true))
      dispatch(isSubmitting(false))
      // return quote
    }
    function onError(errors) {
      dispatch(submitErrors(errors))
      dispatch(isSubmitting(false))
      // return errors
    }

    try {
      let response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })
      const data = await response.json()
      if (data.quote) {
        return onSuccess(data.quote)
      }
      if (data.errors) {
        return onError(data.errors)
      }

    } catch (error) {
      console.log(error)
      return
    }
  }
}

export const updateForm = (payload) =>
  ({ type: FORM_UPDATE, payload })

export const updateQuote = (payload) =>
  ({ type: QUOTE_UPDATE, payload })

export const submitErrors = (payload) =>
  ({ type: ERRORS_SUBMIT, payload })

export const clearSingleError = (payload) =>
  ({ type: ERRORS_UPDATE, payload })

export const clearAllErrors = () =>
  ({ type: ERRORS_CLEAR })

export const isSubmitting = (payload) =>
  ({ type: IS_SUBMITTING, payload })

export const setSuccess = payload =>
  ({ type: SUCCESS, payload })
