const Currency_formatter = new Intl.NumberFormat(undefined,{
    currency: "USD" , style: "currency"
})

export function formatCurrency(number: number){
    return Currency_formatter.format(number);
}