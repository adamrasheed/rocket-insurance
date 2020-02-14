import {
  FORM_UPDATE,
  IS_SUBMITTING,
  SUCCESS,
  QUOTE_UPDATE,
  ERRORS_SUBMIT,
  ERRORS_UPDATE,
  ERRORS_CLEAR,
} from "./reducer";

export const updateForm = (value, key) =>
  ({ type: FORM_UPDATE, value, key })

export const updateQuote = (quote) =>
  ({ type: QUOTE_UPDATE, quote })

export const submitErrors = (errors) =>
  ({ type: ERRORS_SUBMIT, errors })

export const clearSingleError = (key) =>
  ({ type: ERRORS_UPDATE, key })

export const clearAllErrors = () =>
  ({ type: ERRORS_CLEAR })

export const isSubmitting = (isSubmitting) =>
  ({ type: IS_SUBMITTING, isSubmitting })

export const setSuccess = success =>
  ({ type: SUCCESS, success })
