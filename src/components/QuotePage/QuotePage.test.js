import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import '@testing-library/jest-dom'
import { siteReducer } from '../../store/siteReducer'
import {
  render
} from '@testing-library/react'
import QuotePage from '.'
import { mockSuccessState } from '../../constants/mock'

test('Quote page correctly displaying correct data', () => {

  const { container, getByTestId } = render(
    <Provider store={createStore(siteReducer, mockSuccessState)}>
      <QuotePage />
    </Provider>
  )
  expect(container.innerHTML)
    .toContain('Adam, here\'s your policy information')
  expect(getByTestId('Name')
    .innerHTML).toEqual('Adam Rasheed')
  expect(getByTestId('Address').innerHTML)
    .toEqual('17107 Telmo, IRVINE CA, 92618')
  expect(getByTestId('Premium')
    .innerHTML).toEqual('$26,000')
  expect(getByTestId('Deductible')
    .innerHTML).toEqual('$500')
  expect(getByTestId('Asteroid Collision')
    .innerHTML).toEqual('$100,000')

})