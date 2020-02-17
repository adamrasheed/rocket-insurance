import { INITIAL_FORM_ERRORS } from "../constants/constants"

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
      let updatedForm = { ...state.form }

      if (state.form[action.payload.key] !== undefined) {
        updatedForm[action.payload.key] = action.payload.value
      }
      if (state.form.address[action.payload.key] !== undefined) {
        updatedForm.address[action.payload.key] = action.payload.value
      }

      return {
        ...state,
        form: updatedForm,
      }

    case IS_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload
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

      if (state.errors[action.payload]) {
        updatedErrors[action.payload] = false
      }
      if (state.errors.address[action.payload]) {
        updatedErrors.address[action.payload] = false
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
        quote: action.payload
      }

    case SUCCESS:
      return {
        ...state,
        success: action.payload
      }

    default:
      return state;
  }
}