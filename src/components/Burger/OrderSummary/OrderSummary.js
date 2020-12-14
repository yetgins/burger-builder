import React from 'react';

const OrderSummary = (props) => {
    const ingredientsSummary=Object.keys(props.ingredients)
        .map(igKey => {
            return (
            <li key={igKey}> 
                <span style={{textTrasform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]} 
            </li>);
        });

    return (
        <>
          <h3>Your Order</h3>
          <p>A delicious burger with the following ingredients:</p>
          <ul>
            {ingredientsSummary}
          </ul>
          <p> <strong>Total Price: {props.price.toFixed(2)} </strong> </p>
          <p>Your order has been placed successfully.</p>
        </>
    )
}

export default OrderSummary
