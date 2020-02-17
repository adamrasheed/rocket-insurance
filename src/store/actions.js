import {
  FORM_UPDATE,
  IS_SUBMITTING,
  SUCCESS,
  QUOTE_UPDATE,
  ERRORS_SUBMIT,
  ERRORS_UPDATE,
  ERRORS_CLEAR,
} from "./reducer";

export const updateForm = (payload) =>
  ({ type: FORM_UPDATE, payload })

export const updateQuote = (payload) =>
  ({ type: QUOTE_UPDATE, payload })

export const submitErrors = (errors) =>
  ({ type: ERRORS_SUBMIT, errors })

export const clearSingleError = (payload) =>
  ({ type: ERRORS_UPDATE, payload })

export const clearAllErrors = () =>
  ({ type: ERRORS_CLEAR })

export const isSubmitting = (payload) =>
  ({ type: IS_SUBMITTING, payload })

export const setSuccess = payload =>
  ({ type: SUCCESS, payload })
