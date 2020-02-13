export const FORM_UPDATE = 'FORM_UPDATE'
export const FORM_SUBMIT = 'FORM_SUBMIT'
export const ERROR_UPDATE = 'ERROR_UPDATE'
export const IS_SUBMITTING = 'IS_SUBMITTING'
export const SUCCESS = 'SUCCESS'

export const siteReducer = async (state, action) => {
  switch (action.type) {
    case FORM_UPDATE:
      let newForm = { ...state.form }

      if (state.form[action.key] !== undefined) {
        newForm[action.key] = action.value
      }
      if (state.form ?.address[action.key] !== undefined) {
        newForm.address[action.key] = action.value
      }

      console.log(newForm)

      return {
        ...state,
        form: newForm,
      }

    case IS_SUBMITTING:
      return {
        ...state,
        isSubmitting: action.isSubmitting
      }

    case SUCCESS:
      return {
        ...state,
        success: action.success
      }


    case FORM_SUBMIT:
      return {
        ...state,
        quote: action.quote,
      }

    default:
      return state;
  }
}