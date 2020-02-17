import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, cleanup, wait } from '@testing-library/react'
import RatingForm, { handleFormSubmit } from './index'
import { mockStoreFormFilled } from '../../constants/mock'
import SiteProvider from '../../store/SiteContext'
import { get } from 'https'

// TODO: Add Tests
afterEach(cleanup)

// Submitting Form with Correct information should send a POST request
test('submits POST request when form is submitted', async () => {
  const { getByLabelText, getByTestId } = render(
    <SiteProvider>
      <RatingForm state={mockStoreFormFilled} />
    </SiteProvider>
  )
  const Form = getByTestId('rating-form')
  const mockFormSubmit = jest.fn()
  // fill out the form
  fireEvent.change(getByTestId('first_name'), { target: { value: 'Adam' } })
  fireEvent.change(getByTestId('last_name'), { target: { value: 'Rasheed' } })
  fireEvent.change(getByTestId('line_1'), { target: { value: '17107 Telmo' } })
  fireEvent.change(getByTestId('city'), { target: { value: 'Irvine' } })
  fireEvent.select(getByTestId('region'), { target: { value: 'CA' } })
  fireEvent.change(getByTestId('postal'), { target: { value: '92618' } })

  fireEvent.submit(Form)
  expect(getByTestId('spinner')).toBeInTheDocument()
  expect(mockFormSubmit).toHaveBeenCalledTimes(1)

})

// Successful Post request should return new