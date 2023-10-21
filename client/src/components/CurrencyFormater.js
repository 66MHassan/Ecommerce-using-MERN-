import React from 'react'

const CurrencyFormater = ({ price }) => {
    return Intl.NumberFormat("en-PK", {
        style: 'currency',
        currency: 'PKR',
        currencyDisplay: 'narrowSymbol',
        locale: 'ur-PK',
      }).format(price / 100);
  
}

export default CurrencyFormater