import {
  INITIAL_FORM_VALUES,
  INITIAL_FORM_ERRORS
} from "../constants/constants"
import {
  FORM_UPDATE,
  IS_SUBMITTING,
  ERRORS_SUBMIT,
  ERRORS_UPDATE,
  ERRORS_CLEAR,
  QUOTE_UPDATE,
  SUCCESS,
} from './actionTypes'

export const initialStore = {
  form: INITIAL_FORM_VALUES,
  quote: {},
  isSubmitting: false,
  success: false,
  errors: INITIAL_FORM_ERRORS,
}

export const siteReducer = (state = initialStore, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      let newForm = { ...state.form }

      if (state.form[action.payload.key] !== undefined) {
        newForm[action.payload.key] = action.payload.value
      }
      if (state.form.address[action.payload.key] !== undefined) {
        newForm.address[action.payload.key] = action.payload.value
      }

      return {
        ...state,
        form: newForm,
      }

    case IS_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.payload
      }

    case ERRORS_SUBMIT:
      let newErrors = {
        ...state.errors,
        ...action.payload,
        address: {
          ...state.errors.address,
          ...action.payload.address
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