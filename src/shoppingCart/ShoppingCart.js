import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import ShoppingCartBases from './ShoppingCartBases'
import ShoppingCartSauces from './ShoppingCartSauces'
import ShoppingCartToppings from './ShoppingCartToppings'
import HomeDelivery from './HomeDeliveryForm'
import Subtotal from './Subtotal'
import Total from './Total'

class ShoppingCart extends PureComponent {
  render() {
    return (
      <div className="shoppingCart">
        <h1>Shopping Cart</h1>
        <hr></hr>
        {this.props.base.length === 1 && <ShoppingCartBases/>}
        {this.props.sauce.length === 1 && <ShoppingCartSauces/>}
        {this.props.topping.length >= 1 && this.props.topping.length <= 3 && <ShoppingCartToppings/>}

      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    sauce: state.sauces,
    base:state.bases,
    topping: state.toppings
  }
}

export default connect(mapStateToProps)(ShoppingCart)
