import React, { useState, useContext } from 'react';
import { Container } from 'semantic-ui-react';
import { states } from '../constants'
import { SiteContext } from '../context/SiteContext';

import * as Spinner from '../assets/spinner.svg'

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

  const handleSubmit = () => {
    const payload = {
      first_name: firstName,
      last_name: lastName,
      address,
    }
    submitQuote(payload)
  }

  return isSubmitting ? (
    <div className="spinner-wrapper">
      <img src={Spinner} alt="Loading" className="spinner" />
    </div>
  ) : (
      <div className="container quote-container">
        <form onSubmit={handleSubmit}>
          <h2 className="center full">Get a Quote</h2 >
          <input
            label="First Name"
            type="text"
            onChange={(e) => { setFirstName(e.target.value) }}
            value={firstName}
          />

          <input
            label="Last Name"
            type="text"
            onChange={(e) => { setLastName(e.target.value) }}
            value={lastName}
          />
          <input
            label="Street"
            type="text"
            className="full"
            onChange={e => handleAddressChange(e.target.value, 'line_1')}
            value={address.line}
          />
          <input
            label="Street 2"
            type="text"
            className="full"
            onChange={e => handleAddressChange(e.target.value, 'line_2')}
            value={address.line2} />

          <input
            label="City"
            type="text"
            onChange={e => handleAddressChange(e.target.value, 'city')}
            value={address.city}
            className="full" />

          <div className="field">
            <label htmlFor="region">Region</label>
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
          </div>

          <input
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