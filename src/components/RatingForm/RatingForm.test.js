import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, cleanup, act } from '@testing-library/react'
import RatingForm, { handleFormSubmit } from './index'
import { mockStoreFormFilled } from '../../constants/mock'
import SiteProvider from '../../store/SiteContext'
import { updateQuote } from '../../store/actions'

// jest.mock('../../store/actions')

// TODO: Add Tests
afterEach(cleanup)

// Submitting Form with Correct information should send a POST request
test('submits POST request when form is submitted', async () => {
  const returnedData = {}
  const fetchRequest = jest.fn(() => {
    return {
      json: () => Promise.resolve(returnedData)
    }
  })
  jest.spyOn(global, "fetch").mockImplementation(fetchRequest);

  let container = {}


  act(() => {
    const { getByLabelText, getByTestId } = render(
      <SiteProvider>
        <RatingForm state={mockStoreFormFilled} />
      </SiteProvider>
    )
    container.getByLabelText = getByLabelText
    container.getByTestId = getByTestId
  })

  const Form = container.getByTestId('rating-form')

  // fill out the form
  fireEvent.change(container.getByTestId('first_name'), { target: { value: 'Adam' } })
  // fireEvent.change(container.getByTestId('last_name'), { target: { value: 'Rasheed' } })
  // fireEvent.change(container.getByTestId('line_1'), { target: { value: '17107 Telmo' } })
  // fireEvent.change(container.getByTestId('city'), { target: { value: 'Irvine' } })
  // fireEvent.select(container.getByTestId('region'), { target: { value: 'CA' } })
  // fireEvent.change(container.getByTestId('postal'), { target: { value: '92618' } })

  act(() => {
    fireEvent.submit(Form)
  })
  // expect(container.getByTestId('spinner')).toBeInTheDocument()

  expect(fetchRequest).toHaveBeenCalledTimes(1)

  // expect(updateQuote).toHaveBeenCalled()

  // expect updstequote to get called with returnedData ==> 


})

// Successful Post request should return new