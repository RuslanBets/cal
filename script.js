
let RUB = 0.36
let USD = 26
let EUR = 30
let PLN = 0.15
let UAH = 1


do {
  let targetCurrency

  do {
    targetCurrency = prompt('Which currency do you want?(RUB,USD,EUR,PLN,UAH)')
  } while (targetCurrency !== 'RUB' && targetCurrency !== 'USD' && targetCurrency !== 'EUR' && targetCurrency !== 'PLN' && targetCurrency !== 'UAH')
  
  
  let currency
  
  do {
    currency = prompt('Which currency do you have?(RUB,USD,EUR,PLN,UAH)')
  } while (currency !== 'RUB' && currency !== 'USD' && currency !== 'EUR' && currency !== 'PLN' && currency !== 'UAH')
  
  let amount;
  
  do {
    amount = +prompt('Please write your amount')
  } while (!(amount > 0))
  
  let curName = targetCurrency
  
  switch (targetCurrency) {
    case 'RUB': targetCurrency = RUB
      break
    case 'USD': targetCurrency = USD
      break
    case 'EUR': targetCurrency = EUR
      break
    case 'PLN': targetCurrency = PLN
      break
    case 'UAH': targetCurrency = UAH
  }
  
  
  switch (currency) {
    case 'RUB': currency = RUB
      break
    case 'USD': currency = USD
      break
    case 'EUR': currency = EUR
      break
    case 'PLN': currency = PLN
      break
    case 'UAH': currency = UAH
  }
  
  let targetAmount = (amount / targetCurrency) * currency
  
  
  alert(`You will get ${targetAmount.toFixed(2)} ${curName}`)

} while (confirm('Do you want to continue using convector'))





