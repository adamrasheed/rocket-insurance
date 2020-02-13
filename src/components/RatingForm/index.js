import React, { useContext, useEffect } from 'react';
import cn from 'classnames'
import {
  STATES,
  NAME,
  ADDRESS,
  API_ENDPOINT
} from '../../constants'
import { SiteContext } from '../../context/SiteContext';
import {
  updateForm,
  setSuccess,
  isSubmitting as submitting
} from '../../actions';
import InputGroup from '../InputGroup';

import spinner from '../../assets/spinner.svg'

import * as style from './style.module.css'

const RatingForm = () => {

  const {
    state,
    dispatch
  } = useContext(SiteContext)

  const { form, isSubmitting } = state

  useEffect(() => {
    console.log('form', form)
  }, [form])

  const handleSubmit = async (e) => {
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
      console.log(data)
      if (data.quote) {
        dispatch()
        dispatch(setSuccess(true))
      }
      if (data.errors) {
        // setQuote({})
        console.log(data.error)
      }
      dispatch(submitting(false))

    } catch (error) {
      console.log(error)
      throw new Error(error)
    }
  }

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
      value: form ?.last_name,
    },
    {
      label: 'Street',
      name: ADDRESS.LINE_1,
      className: 'full',
      error: false,
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
      value: form ?.address.city,
    },
    {
      label: 'State',
      name: ADDRESS.REGION,
      error: false,
      children: renderRegionOptions(),
      value: form ?.address.region,
    },
    {
      label: 'ZIP',
      name: ADDRESS.POSTAL,
      pattern: '[0-9]{5}',
      error: false,
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
        if (form && form[name] !== undefined) {
          return form[name]
        } else if (form && form.address[name] !== undefined) {
          return form.address[name]
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
          onChange={e => dispatch(updateForm(e.target.value, name))}
          value={getValue()}
        >
          {children}
        </InputGroup>
      )
    })
  }

  return isSubmitting ? (
    <div className={style.spinner_wrapper}>
      <img
        src={spinner}
        alt="Loading"
        className={style.spinner}
      />
    </div>
  ) : (
      <div className="container quote-container">
        <form className="form two" onSubmit={handleSubmit}>
          <h2 className="form-title full">Get a Quote</h2 >
          {renderInputs()}
          <button
            className={buttonClass}
            type="submit">Get My Quote</button>
        </form >
      </div >
    );
}

export default RatingForm;