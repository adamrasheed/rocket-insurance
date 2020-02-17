import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { siteReducer, initialStore } from '../../store/siteReducer'
import RatingForm from './index'
import '@testing-library/jest-dom'
import {
  render,
  fireEvent,
  cleanup
} from '@testing-library/react'

afterEach(cleanup)

const buttonText = 'Get My Quote'

test('shows loader when form is submitted with correct data', () => {

  const { getByTestId, getByText } = render(
    <Provider store={createStore(siteReducer, initialStore)}>
      <Router history={createMemoryHistory()}>
        <RatingForm />
      </Router>
    </Provider>
  )

  const button = getByText(buttonText)

  fireEvent.change(getByTestId('first_name'), { target: { value: 'Adam' } })
  fireEvent.change(getByTestId('last_name'), { target: { value: 'Rasheed' } })
  fireEvent.change(getByTestId('line_1'), { target: { value: '17107 Telmo' } })
  fireEvent.change(getByTestId('city'), { target: { value: 'Irvine' } })
  fireEvent.select(getByTestId('region'), { target: { value: 'CA' } })
  fireEvent.change(getByTestId('postal'), { target: { value: '92618' } })
  fireEvent.click(button)
  expect(getByTestId('spinner')).toBeInTheDocument()
})