import React from 'react';
import './Currency.css';

const Currency = props => {
    const {
        price_usd,
    } = props.data

    return ( <
        p className = "currency" > $ {
            (+price_usd).toFixed(2) } < /p>
    )
}
export default Currency;