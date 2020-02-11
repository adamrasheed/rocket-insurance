import React, { useState, useContext, useEffect } from 'react';
import cn from 'classnames'
import { STATES, NAME, ADDRESS } from '../../constants'
import { SiteContext } from '../../context/SiteContext';
import InputGroup from '../InputGroup';

import spinner from '../../assets/spinner.svg'

import * as style from './style.module.css'

const RatingForm = () => {
  const initialAddress = {
    line_1: '',
    line_2: '',
    city: '',
    region: '',
    postal: '',
  }
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [address, setAddress] = useState(initialAddress)
  const {
    isSubmitting,
    submitQuote,
    quoteErrors,
  } = useContext(SiteContext)

  const handleAddressChange = (value, location) => {
    setAddress({
      ...address,
      [location]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      first_name,
      last_name,
      address,
    }
    submitQuote(payload)
  }

  const buttonClass = cn(
    'button',
    'primary',
    'full',
    style.button
  )

  const StateOptions = (
    <select
      className="select"
      name={ADDRESS.REGION}
      id={ADDRESS.REGION}
      onChange={e =>
        handleAddressChange(
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
      error: '',
      required: true,
      onChange: (e) => setFirstName(e.target.value),
      value: first_name
    },
    {
      label: 'Last Name',
      name: NAME.LAST,
      error: '',
      onChange: (e) => setLastName(e.target.value),
      value: last_name,
    },
    {
      label: 'Street',
      name: `address-${ADDRESS.LINE_1}`,
      className: 'full',
      error: '',
      onChange: (e) => handleAddressChange(e.target.value, ADDRESS.LINE_1),
      value: address.line_1,
    },
    {
      label: 'Street 2',
      name: `address-${ADDRESS.LINE_2}`,
      className: 'full',
      error: '',
      onChange: (e) => handleAddressChange(e.target.value, ADDRESS.LINE_2),
      value: address.line_2,
    },
    {
      label: 'City',
      name: `address-${ADDRESS.CITY}`,
      error: '',
      onChange: (e) => handleAddressChange(e.target.value, ADDRESS.CITY),
      value: address.city,
    },
    {
      label: 'State',
      name: `address-${ADDRESS.REGION}`,
      error: '',
      children: StateOptions,
      onChange: (e) => handleAddressChange(e.target.value, ADDRESS.REGION),
      value: address.region,
    },
    {
      label: 'ZIP',
      name: `address-${ADDRESS.POSTAL}`,
      pattern: '[0-9]{5}',
      error: '',
      onChange: (e) => handleAddressChange(e.target.value, ADDRESS.POSTAL),
      value: address.postal,
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
            const errorState = name.includes('address-')
              ? (
                quoteErrors &&
                quoteErrors.address &&
                quoteErrors.address[name.split('-').pop()]
              ) : (
                quoteErrors[name]
              )

            return (
              <InputGroup
                key={name}
                name={name}
                required={required}
                error={errorState}
                className={className}
                label={label}
                onChange={onChange}
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