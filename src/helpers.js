export const loadState = () => {
  try {
    const rawState = localStorage.getItem('state')
    if (rawState === null) {
      return undefined
    }
    return JSON.parse(rawState)

  }
  catch (error) {
    console.error(error)
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const rawState = JSON.stringify(state);
    localStorage.setItem('state', rawState)
  }
  catch (error) {
    console.error(error)
  }
}

export const moneyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
})

export const spaceCase = (string) => {
  return string.replace(/([-_][a-z])/ig, ($1) => {
    return $1.toUpperCase()
      .replace('-', ' ')
      .replace('_', ' ');
  });
};

export const formatAddress = (
  line_1,
  line_2,
  city,
  region,
  postal
) => `${line_1}${line_2 ? line_2 : ` `}${city} ${region ?.toUpperCase()}, ${postal}`

