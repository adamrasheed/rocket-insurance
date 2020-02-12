import React, { useState, useContext, useEffect } from 'react';
import cn from 'classnames'
import { STATES, NAME, ADDRESS } from '../../constants'
import { SiteContext } from '../../context/SiteContext';
import InputGroup from '../InputGroup';

import spinner from '../../assets/spinner.svg'

import * as style from './style.module.css'

const RatingForm = () => {

  const {
    isSubmitting,
    submitQuote,
    formData,
    setFormData,
  } = useContext(SiteContext)


  const handleValueChange = (value, location) => {

    if (formData[location] !== undefined) {
      setFormData({
        ...formData,
        [location]: value
      })
    }
    if (formData.address[location] !== undefined) {
      setFormData({
        ...formData,
        address: {
          ...formData.address,
          [location]: value
        }
      })
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submitQuote()
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
        handleValueChange(
          e.target.value,
          ADDRESS.REGION
        )
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
      value: formData.first_name
    },
    {
      label: 'Last Name',
      name: NAME.LAST,
      error: false,
      value: formData.last_name,
    },
    {
      label: 'Street',
      name: ADDRESS.LINE_1,
      className: 'full',
      error: false,
      value: formData.address.line_1,
    },
    {
      label: 'Street 2',
      name: ADDRESS.LINE_2,
      className: 'full',
      error: false,
      value: formData.address.line_2,
    },
    {
      label: 'City',
      name: ADDRESS.CITY,
      error: false,
      value: formData.address.city,
    },
    {
      label: 'State',
      name: ADDRESS.REGION,
      error: false,
      children: renderRegionOptions(),
      value: formData.address.region,
    },
    {
      label: 'ZIP',
      name: ADDRESS.POSTAL,
      pattern: '[0-9]{5}',
      error: false,
      value: formData.address.postal,
    },
  ]

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
          {inputs.map(({
            label,
            name,
            required,
            className,
            onChange,
            children
          }) => {

            return (
              <InputGroup
                key={name}
                name={name}
                required={required}

                className={className}
                label={label}
                onChange={e => handleValueChange(e.target.value, name)}
              >
                {children}
              </InputGroup>
            )
          })}

          <button
            className={buttonClass}
            type="submit">Get My Quote</button>
        </form >
      </div >
    );
}

export default RatingForm;