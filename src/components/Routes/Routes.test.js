import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import '@testing-library/jest-dom'
import App from '../App'
import { render, cleanup, wait } from '@testing-library/react'

// Expect redirect if success state is true

afterEach(cleanup)

test('Routing', () => {
  const history = createMemoryHistory()
  const { container, getByText } = render(
    <Router history={history}>
      <App />
    </Router>
  )

  // Verify correct home page
  expect(container.innerHTML).toMatch('Get a Quote')

})

// Expect redirect to landing is state != true and quote != true