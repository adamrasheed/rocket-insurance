import React, { useState, useContext } from 'react';
import { Form, Container } from 'semantic-ui-react';
import { states } from '../constants'
import { SiteContext } from '../context/SiteContext';

const QuoteForm = () => {
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

  return isSubmitting ? (<h1>loading...</h1>) : (
    <Container text className="quote-container">
      <Form onSubmit={handleSubmit}>
        <h2 className="center full">Get a Quote</h2>
        <Form.Input
          label="First Name"
          type="text"
          onChange={(e) => { setFirstName(e.target.value) }}
          value={firstName}
        />

        <Form.Input
          label="Last Name"
          type="text"
          onChange={(e) => { setLastName(e.target.value) }}
          value={lastName}
        />
        <Form.Input
          label="Street"
          type="text"
          className="full"
          onChange={e => handleAddressChange(e.target.value, 'line_1')}
          value={address.line}
        />
        <Form.Input
          label="Street 2"
          type="text"
          className="full"
          onChange={e => handleAddressChange(e.target.value, 'line_2')}
          value={address.line2} />

        <Form.Input
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
            {states.map(state => <option key={state} value={state.toLowerCase()}>{state}</option>)}
          </select>
        </div>

        <Form.Input
          label="Postal"
          type="number"
          pattern="[0-9]{5}"
          onChange={e => handleAddressChange(e.target.value, 'postal')}
          value={address.postal} />
        <button className="button primary full" type="submit">Get My Quote</button>
      </Form>
    </Container >
  );
}

export default QuoteForm;