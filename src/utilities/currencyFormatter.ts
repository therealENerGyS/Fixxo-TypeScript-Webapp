const currencyFormat = new Intl.NumberFormat('sv-SE', { currency: 'SEK', style: 'currency' })

export const currencyFormatter = (value: number) => {
    return currencyFormat.format(value)
}