import React, { useState } from 'react';
import { Form, Container } from 'semantic-ui-react';

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

  const handleAddressChange = (value, location) => {
    console.log(value)
    setAddress({
      ...address,
      [location]: value
    })
  }

  const handleSubmit = () => {
    const payload = {
      firstName,
      lastName,
      address,
    }
    console.log(payload)
  }

  return (
    <Container text className="quote-container">
      <Form onSubmit={handleSubmit}>
        <h2 className="center full">Get a Quote</h2>
        <fieldset>
          <Form.Input label="First Name" type="text" onChange={(e) => { setFirstName(e.target.value) }} value={firstName} />
        </fieldset>
        <fieldset>
          <Form.Input label="Last Name" type="text" onChange={(e) => { setLastName(e.target.value) }} value={lastName} />
        </fieldset>
        <fieldset className="full">
          <Form.Input label="Street" type="text" onChange={e => handleAddressChange(e.target.value, 'line')} value={address.line} />
          <Form.Input label="Street 2" type="text" onChange={e => handleAddressChange(e.target.value, 'line2')} value={address.line2} />
          <Form.Input label="City" type="text" onChange={e => handleAddressChange(e.target.value, 'city')} value={address.city} />
          <Form.Input label="Region" type="text" onChange={e => handleAddressChange(e.target.value, 'region')} value={address.region} />
          <Form.Input label="Postal" type="number" pattern="[0-9]{5}" onChange={e => handleAddressChange(e.target.value, 'postal')} value={address.postal} />
        </fieldset>
        <button className="button primary full" type="submit">Get My Quote</button>
      </Form>
    </Container>
  );
}

export default QuoteForm;