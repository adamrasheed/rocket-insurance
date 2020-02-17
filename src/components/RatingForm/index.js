import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import cn from 'classnames'
import {
  STATES,
  NAME,
  ADDRESS,
  API_ENDPOINT,
  INITIAL_FORM_VALUES,
  PATHS
} from '../../constants/constants'
import { SiteContext } from '../../store/SiteContext';
import {
  updateForm,
  setSuccess,
  isSubmitting as submitting,
  updateQuote,
  submitErrors,
  clearSingleError,
  clearAllErrors
} from '../../store/actions';
import InputGroup from '../InputGroup';

import spinner from '../../assets/spinner.svg'

import * as style from './style.module.css'

export const handleFormSubmit = async (e, dispatch, form) => {
  e.preventDefault()
  dispatch(submitting(true))

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
      dispatch(updateQuote(data.quote))
      dispatch(clearAllErrors())
      dispatch(setSuccess(true))
    }
    if (data.errors) {
      console.log(data.errors)
      dispatch(submitErrors(data.errors))
    }
    dispatch(submitting(false))

  } catch (error) {
    console.log(error)
  }
}

const RatingForm = () => {

  const {
    state,
    dispatch
  } = useContext(SiteContext)

  const {
    form,
    isSubmitting,
    errors,
    quote,
    success,
  } = state

  // populate default state/region
  useEffect(() => {
    if (state.form.address.region === '') {

      const form = {
        ...INITIAL_FORM_VALUES,
      }
      form.address.region = STATES[0]
      dispatch(updateForm(STATES[0], ADDRESS.REGION))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const buttonClass = cn(
    'button',
    'primary',
    'full',
    style.button
  )

  const renderRegionOptions = () => (
    <select
      className="select"
      name={ADDRESS.REGION}
      id={ADDRESS.REGION}
      data-testid={ADDRESS.REGION}
      onChange={e =>
        dispatch(updateForm(
          e.target.value,
          ADDRESS.REGION
        ))
      }>
      {STATES.map(state => (
        <option
          key={state}
          value={state.toLowerCase()}>
          {state}
        </option>
      ))}
    </select>
  )

  const inputs = [
    {
      label: 'First Name',
      name: NAME.FIRST,
      error: false,
      required: true,
      value: form ?.first_name
    },
    {
      label: 'Last Name',
      name: NAME.LAST,
      error: false,
      required: true,
      value: form ?.last_name,
    },
    {
      label: 'Street',
      name: ADDRESS.LINE_1,
      className: 'full',
      error: false,
      required: true,
      value: form ?.address.line_1,
    },
    {
      label: 'Street 2',
      name: ADDRESS.LINE_2,
      className: 'full',
      error: false,
      value: form ?.address.line_2,
    },
    {
      label: 'City',
      name: ADDRESS.CITY,
      error: false,
      required: true,
      value: form ?.address.city,
    },
    {
      label: 'State',
      name: ADDRESS.REGION,
      error: false,
      required: true,
      children: renderRegionOptions(),
      value: form ?.address.region,
    },
    {
      label: 'ZIP',
      name: ADDRESS.POSTAL,
      pattern: '[0-9]{5}',
      error: false,
      required: true,
      value: form ?.address.postal,
    },
  ]

  function renderInputs() {
    return inputs.map(({
      label,
      name,
      required,
      className,
      onChange,
      pattern,
      children
    }) => {

      function getValue() {
        if (form[name] !== undefined) {
          return form[name]
        } else if (form.address[name] !== undefined) {
          return form.address[name]
        }
      }

      function getError() {
        if (errors[name] !== undefined) {
          return errors[name]
        } else if (errors.address[name] !== undefined) {
          return errors.address[name]
        }
      }

      return (
        <InputGroup
          key={name}
          name={name}
          required={required}
          pattern={pattern}
          className={className}
          label={label}
          error={getError()}
          data-testid={name}
          onChange={e => {
            dispatch(clearSingleError(name))
            dispatch(updateForm(e.target.value, name))
          }}
          value={getValue()}
        >
          {children}
        </InputGroup>
      )
    })
  }

  const showQuote = quote && success

  return showQuote ? (
    <Redirect to={PATHS.QUOTE} />
  ) :
    (isSubmitting ? (
      <div className={style.spinner_wrapper} data-testid="spinner">
        <img
          src={spinner}
          alt="Loading"
          className={style.spinner}
        />
      </div>
    ) : (
        <div className="container quote-container">
          <form
            className={cn(style.form, 'two')}
            onSubmit={(e) => handleFormSubmit(e, dispatch, form)}
            data-testid="rating-form"
          >
            <h2 className={cn(style.form_title, 'full')}>Get a Quote</h2 >
            {renderInputs()}
            <button
              className={buttonClass}
              type="submit">Get My Quote</button>
          </form >
        </div >
      )
    );
}

export default RatingForm;