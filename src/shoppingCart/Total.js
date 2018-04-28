import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import HomeDelivery from './HomeDeliveryForm'


class Subtotal extends PureComponent {
  render() {
    return (
      <div className="shoppingCart">
        <h2>Total</h2>
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

export default connect(mapStateToProps)(Subtotal)
