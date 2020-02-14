import { INITIAL_FORM_ERRORS } from "./constants"

export const FORM_UPDATE = 'FORM_UPDATE'
export const ERRORS_SUBMIT = 'ERRORS_SUBMIT'
export const ERRORS_UPDATE = 'ERRORS_UPDATE'
export const ERRORS_CLEAR = 'ERRORS_CLEAR'
export const QUOTE_UPDATE = 'QUOTE_UPDATE'
export const IS_SUBMITTING = 'IS_SUBMITTING'
export const SUCCESS = 'SUCCESS'

export const siteReducer = (state, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      let newForm = { ...state.form }

      if (state.form[action.key] !== undefined) {
        newForm[action.key] = action.value
      }
      if (state.form.address[action.key] !== undefined) {
        newForm.address[action.key] = action.value
      }

      return {
        ...state,
        form: newForm,
      }

    case IS_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.isSubmitting
      }

    case ERRORS_SUBMIT:
      let newErrors = {
        ...state.errors,
        ...action.errors,
        address: {
          ...state.errors.address,
          ...action.errors.address
        }
      }

      return {
        ...state,
        errors: newErrors
      }

    case ERRORS_UPDATE:
      let updatedErrors = { ...state.errors }

      if (state.errors[action.key] !== undefined) {
        console.log(updatedErrors)
        updatedErrors[action.key] = false
      }
      if (state.errors.address[action.key] !== undefined) {
        updatedErrors.address[action.key] = false
      }

      return {
        ...state,
        errors: updatedErrors
      }

    case ERRORS_CLEAR:
      return {
        ...state,
        errors: INITIAL_FORM_ERRORS
      }

    case QUOTE_UPDATE:
      return {
        ...state,
        quote: action.quote
      }

    case SUCCESS:
      return {
        ...state,
        success: action.success
      }

    default:
      return state;
  }
}