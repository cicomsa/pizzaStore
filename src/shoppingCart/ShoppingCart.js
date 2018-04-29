import React, { PureComponent } from 'react';
import ShoppingCarts from './ShoppingCarts'
import HomeDelivery from './HomeDeliveryForm'
import Subtotal from './Subtotal'
import Total from './Total'
import './ShoppingCart.css'

class ShoppingCart extends PureComponent {
  render() {
    return (
      <div className="shoppingCart">
        <h2>Shopping Cart</h2>
        <Subtotal/>
        <HomeDelivery/>
        <Total/>
        <button onClick={() => window.location.reload()}> Empty Cart </button>
        <hr></hr>
        <ShoppingCarts/>
      </div>
    );
  }
}

export default ShoppingCart
