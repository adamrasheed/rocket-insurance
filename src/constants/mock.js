import { initialStore } from "../store/SiteContext";

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