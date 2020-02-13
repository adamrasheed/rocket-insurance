import {
  FORM_UPDATE,
  IS_SUBMITTING,
  SUCCESS,
  QUOTE_UPDATE,
} from "./reducer";

export const updateForm = (value, key) =>
  ({ type: FORM_UPDATE, value, key })

export const updateQuote = (quote) =>
  ({ type: QUOTE_UPDATE, quote })

export const isSubmitting = (isSubmitting) =>
  ({ type: IS_SUBMITTING, isSubmitting })

export const setSuccess = success =>
  ({ type: SUCCESS, success })
