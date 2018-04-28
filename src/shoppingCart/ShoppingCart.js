import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import ShoppingCartBases from './ShoppingCartBases'
import ShoppingCartSauces from './ShoppingCartSauces'
import ShoppingCartToppings from './ShoppingCartToppings'
import HomeDelivery from './HomeDeliveryForm'
import ToPay from './Subtotal'
import Total from './Total'

class ShoppingCart extends PureComponent {
  render() {
    return (
      <div className="shoppingCart">
        <h1>Shopping Cart</h1>
        <ToPay/>
        <hr></hr>
        {this.props.baseCart.length === 1 && <ShoppingCartBases/>}
        {this.props.sauceCart.length === 1 && <ShoppingCartSauces/>}
        {this.props.toppingCart.length >= 1 && this.props.toppingCart.length <= 3 && <ShoppingCartToppings/>}

      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    sauceCart: state.sauce,
    baseCart:state.base,
    toppingCart: state.topping
  }
}

export default connect(mapStateToProps)(ShoppingCart)
