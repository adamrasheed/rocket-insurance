import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom'
import cn from 'classnames'
import {
  STATES,
  NAME,
  ADDRESS,
  INITIAL_FORM_VALUES,
  PATHS
} from '../../constants/constants'

import {
  updateForm,
  clearSingleError,
  submitForm
} from '../../store/actions';
import InputGroup from '../InputGroup';

import spinner from '../../assets/spinner.svg'

import * as style from './style.module.css'

const RatingForm = () => {
  const form = useSelector(state => state.form)
  const quote = useSelector(state => state.quote)
  const errors = useSelector(state => state.errors)
  const success = useSelector(state => state.success)
  const isSubmitting = useSelector(state => state.isSubmitting)
  const dispatch = useDispatch()


  // populate default state/region
  useEffect(() => {
    if (form.address.region === '') {

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
        dispatch(updateForm({
          value: e.target.value,
          key: ADDRESS.REGION
        }
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
      value: form ?.address ?.line_1,
    },
    {
      label: 'Street 2',
      name: ADDRESS.LINE_2,
      className: 'full',
      error: false,
      value: form ?.address ?.line_2,
    },
    {
      label: 'City',
      name: ADDRESS.CITY,
      error: false,
      required: true,
      value: form ?.address ?.city,
    },
    {
      label: 'State',
      name: ADDRESS.REGION,
      error: false,
      required: true,
      children: renderRegionOptions(),
      value: form ?.address ?.region,
    },
    {
      label: 'ZIP',
      name: ADDRESS.POSTAL,
      pattern: '[0-9]{5}',
      error: false,
      required: true,
      value: form ?.address ?.postal,
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
        if (form[name]) {
          return form[name]
        }
        if (form.address[name]) {
          return form.address[name]
        }
      }

      function getError() {
        if (errors[name]) {
          return errors[name]
        }
        if (errors.address[name]) {
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
            dispatch(updateForm({
              value: e.target.value,
              key: name
            }))
          }}
          value={getValue()}
        >
          {children}
        </InputGroup>
      )
    })
  }

  const showQuote = quote && success

  useEffect(() => {
    console.log('submitting', isSubmitting)
  }, [isSubmitting])

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
            onSubmit={(e) => submitForm(e, form)(dispatch)}
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