import React from 'react';
import axios from 'axios';
import Currency from './Currency.js'

class BTC extends React.Component{
  constructor(props) {
     super(props)
     this.state = {
       data: [
         {
           price_usd:' '
         }
       ],
     }
   }

  fetchCurrencyData = () => {
    axios
      .get('https://api.coinmarketcap.com/v1/ticker/?limit=10')
      .then(response => {
        const wanted = ['bitcoin']
        const result = response.data.filter(currency =>
          wanted.includes(currency.id),
        )
        this.setState({data:result})
      })
      .catch(err => console.log(err))
  }


  componentDidMount(){
    this.fetchCurrencyData()
  }

  render(){
    let crypto = this.state.data.map(currency => (
      <Currency data = {currency} key={currency.id} />
    ))
    return(
      <div className = "crypto-container">
         {crypto}
      </div>
    )
  }
}

export default BTC;
