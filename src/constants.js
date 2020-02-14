export const STATES = [
  "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
  "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
  "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
  "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
  "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY",
]

export const NAME = {
  FIRST: 'first_name',
  LAST: 'last_name'
}

export const ADDRESS = {
  LINE_1: 'line_1',
  LINE_2: 'line_2',
  CITY: 'city',
  REGION: 'region',
  POSTAL: 'postal'
}


export const PATHS = {
  LANDING: '/',
  QUOTE: '/quote'
}

export const API_ENDPOINT = 'https://fed-challenge-api.sure.now.sh/api/v1/quotes'

export const INITIAL_FORM_VALUES = {
  first_name: '',
  last_name: '',
  address: {
    line_1: '',
    line_2: '',
    city: '',
    region: '',
    postal: '',
  }
}

export const INITIAL_FORM_ERRORS = {
  first_name: false,
  last_name: false,
  address: {
    line_1: false,
    line_2: false,
    city: false,
    region: false,
    postal: false,
  }
}