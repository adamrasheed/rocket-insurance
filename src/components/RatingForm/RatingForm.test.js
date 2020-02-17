import React from 'react'
import '@testing-library/jest-dom'
import {
  render,
  fireEvent,
  cleanup
} from '@testing-library/react'
import RatingForm from './index'
import SiteProvider from '../../store/SiteContext'

// TODO: Add Tests

afterEach(cleanup)

const renderComponent = () => render(
  <SiteProvider>
    <RatingForm />
  </SiteProvider>
)

test('shows loader when form is submitted with correct data', () => {

  const { getByTestId, getByText } = renderComponent()

  const Form = getByTestId('rating-form')
  const button = getByText('Get My Quote')

  fireEvent.change(getByTestId('first_name'), { target: { value: 'Adam' } })
  fireEvent.change(getByTestId('last_name'), { target: { value: 'Rasheed' } })
  fireEvent.change(getByTestId('line_1'), { target: { value: '17107 Telmo' } })
  fireEvent.change(getByTestId('city'), { target: { value: 'Irvine' } })
  fireEvent.select(getByTestId('region'), { target: { value: 'CA' } })
  fireEvent.change(getByTestId('postal'), { target: { value: '92618' } })
  fireEvent.click(button)
  expect(getByTestId('spinner')).toBeInTheDocument()
  cleanup()
})