import React from 'react'
import {
  render,
  fireEvent,
  cleanup
} from '@testing-library/react'
import { initialStore } from './SiteContext'
import { siteReducer } from './reducer'
import * as ACTIONS from './actions'
import { ADDRESS, NAME } from '../constants'

afterEach(cleanup)

describe('test actions', () => {
  it('clearSingleError: should update correct error field', () => {
    const errorState = {
      ...initialStore,
    }
    errorState.errors.address.city = 'This is an Error'
    const key = ADDRESS.CITY
    expect(
      siteReducer(
        errorState,
        ACTIONS.clearSingleError(key)
      )
    ).toEqual(initialStore)
  })

  it('updateForm: should update correct form field', () => {
    const test_first_name = 'Adam'
    const newState = {
      ...initialStore,
    }
    newState.form.first_name = test_first_name
    expect(
      siteReducer(
        initialStore,
        ACTIONS.updateForm(test_first_name, NAME.FIRST)
      )
    ).toEqual(newState)
  })

  it('updateQuote: ', () => {
    const apiResponse = {
      "quoteId": "UP5938947",
      "rating_address": {
        "line_1": "17107 Telmo",
        "line_2": "",
        "city": "IRVINE",
        "region": "ca",
        "postal": "92618"
      },
      "policy_holder": {
        "first_name": "Adam",
        "last_name": "Rasheed"
      },
      "variable_options": {
        "deductible": {
          "title": "Deductible",
          "description": "The amount of money you will pay in an insurance claim before the insurance coverage kicks in.",
          "values": [
            500,
            1000,
            2000
          ]
        },
        "asteroid_collision": {
          "title": "Asteroid Collision Limit",
          "description": "The maximum amount covered for damages caused by asteroid collisions.",
          "values": [
            100000,
            300000,
            500000,
            1000000
          ]
        }
      },
      "variable_selections": {
        "deductible": 500,
        "asteroid_collision": 100000
      },
      "premium": 26000
    }

    const newStore = {
      ...initialStore,
      quote: apiResponse
    }

    expect(
      siteReducer(
        initialStore,
        ACTIONS.updateQuote(apiResponse)
      )
    ).toEqual(newStore)
  })

  it('submitErrors: ', () => {
    const apiResponse = {
      last_name: "missing_value",
      address: {
        line_1: "missing_value",
        postal: "missing_value"
      }
    }

    const newState = {
      ...initialStore,
      errors: {
        first_name: false,
        last_name: "missing_value",
        address: {
          line_1: "missing_value",
          line_2: false,
          city: false,
          region: false,
          postal: "missing_value",
        }
      }
    }

    expect(
      siteReducer(
        initialStore,
        ACTIONS.submitErrors(apiResponse))
    ).toEqual(newState)
  })

  it('clearAllErrors: should clear all errors', () => {
    const errorState = { ...initialStore }
    errorState.errors.first_name = 'Error'
    errorState.errors.last_name = 'Last Name Error'
    expect(
      siteReducer(
        errorState,
        ACTIONS.clearAllErrors()
      )
    ).toEqual(initialStore)
  })

  it('isSubmitting: should update correctly', () => {
    const submittingState = {
      ...initialStore,
      isSubmitting: true
    }
    expect(
      siteReducer(
        initialStore,
        ACTIONS.isSubmitting(true)
      )
    ).toEqual(submittingState)
  })

  it('setSuccess', () => {
    const newStore = {
      ...initialStore,
      success: true
    }
    expect(
      siteReducer(
        initialStore,
        ACTIONS.setSuccess(true)
      )
    ).toEqual(newStore)
  })
})