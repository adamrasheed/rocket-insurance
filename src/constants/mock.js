import { initialStore } from "../store/siteReducer";

export const mockStoreFormFilled = {
  ...initialStore,
  form: {
    first_name: 'Adam',
    last_name: 'Rasheed',
    address: {
      line_1: '17107 Telmo',
      line_2: '',
      city: 'Irvine',
      region: 'CA',
      postal: '92618',
    }
  }
}

export const mockSuccessState = {
  "form": {
    "first_name": "Adam",
    "last_name": "Rasheed",
    "address": {
      "line_1": "17107 Telmo",
      "line_2": "",
      "city": "IRVINE",
      "region": "ca",
      "postal": "92618"
    }
  },
  "quote": {
    "quoteId": "UP0245931",
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
  },
  "isSubmitting": false,
  "success": true,
  "errors": {
    "first_name": false,
    "last_name": false,
    "address": {
      "line_1": false,
      "line_2": false,
      "city": false,
      "region": false,
      "postal": false
    }
  }
}