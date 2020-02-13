import {
  FORM_UPDATE,
  IS_SUBMITTING,
  SUCCESS,
  FORM_SUBMIT,
} from "./reducer";

export const updateForm = (value, key) => {
  console.log(value, key)
  return ({ type: FORM_UPDATE, value, key })
}

export const submitForm = (form) =>
  ({ type: FORM_SUBMIT, form })

export const isSubmitting = (isSubmitting) =>
  ({ type: IS_SUBMITTING, isSubmitting })

export const setSuccess = success =>
  ({ type: SUCCESS, success })
