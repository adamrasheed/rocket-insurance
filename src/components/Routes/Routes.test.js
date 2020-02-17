import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'
import App from '../App'

import { render } from '@testing-library/react'

function renderWithRouter(
  ui,
  { route = '/', history = createMemoryHistory({ initialEntries: [route] }) } = {},
) {
  return {
    ...render(<Router history={history}>{ui}</Router>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  }
}


// Verify correct home page
test('Verify correct home page', () => {
  const history = createMemoryHistory()
  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  expect(container.innerHTML).toMatch('Get a Quote')
})

test('landing on a bad page', () => {
  const { container } = renderWithRouter(<App />, {
    route: '/bad-route',
  })
  // normally I'd use a data-testid, but just wanted to show this is also possible
  expect(container.innerHTML).toMatch('404')
})