export const saveState = (name = 'state', state) =>
  localStorage.setItem(name, JSON.stringify(state))

export const loadState = (name) => JSON.parse(localStorage.getItem(name))

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