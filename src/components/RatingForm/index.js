import React, { useState, useContext } from 'react';
import { states } from '../../constants'
import { SiteContext } from '../../context/SiteContext';
import InputGroup from '../InputGroup';

import spinner from '../../assets/spinner.svg'

import * as style from './style.module.css'

const RatingForm = () => {
  const initialAddress = {
    line: '',
    line2: '',
    city: '',
    region: '',
    postal: '',
  }
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [address, setAddress] = useState(initialAddress)
  const { isSubmitting, submitQuote } = useContext(SiteContext)

  const handleAddressChange = (value, location) => {
    setAddress({
      ...address,
      [location]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const payload = {
      first_name: firstName,
      last_name: lastName,
      address,
    }
    submitQuote(payload)
  }

  return isSubmitting ? (
    <div className={style.spinner_wrapper}>
      <img src={spinner} alt="Loading" className={style.spinner} />
    </div>
  ) : (
      <div className="container quote-container">
        <form className="form two" onSubmit={handleSubmit}>
          <h2 className="form-title full">Get a Quote</h2 >
          <InputGroup
            label="First Name"
            onChange={(e) => { setFirstName(e.target.value) }}
            value={firstName}
          />

          <InputGroup
            label="Last Name"
            onChange={(e) => { setLastName(e.target.value) }}
            value={lastName}
          />
          <InputGroup
            label="Street"
            type="text"
            className="full"
            onChange={e => handleAddressChange(e.target.value, 'line_1')}
            value={address.line}
          />
          <InputGroup
            label="Street 2"
            type="text"
            className="full"
            onChange={e => handleAddressChange(e.target.value, 'line_2')}
            value={address.line2} />

          <InputGroup
            label="City"
            type="text"
            onChange={e => handleAddressChange(e.target.value, 'city')}
            value={address.city}
            className="full" />

          <InputGroup label="Region">
            <select
              className="ui select"
              name="region"
              id="region"
              onChange={e => handleAddressChange(e.target.value, "region")}>
              {states.map(state => (
                <option
                  key={state}
                  value={state.toLowerCase()}>
                  {state}
                </option>
              ))}
            </select>
          </InputGroup>

          <InputGroup
            label="Postal"
            type="number"
            pattern="[0-9]{5}"
            onChange={e => handleAddressChange(e.target.value, 'postal')}
            value={address.postal} />
          <button className="button primary full" type="submit">Get My Quote</button>
        </form >
      </div >
    );
}

export default RatingForm;