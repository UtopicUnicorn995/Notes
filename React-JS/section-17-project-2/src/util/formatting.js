// Util codes for adding dollar sign or any other currency to a text

export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
})

