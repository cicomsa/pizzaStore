import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import HomeDelivery from './HomeDeliveryForm'
import {SUBTOTAL} from '../actions/totSub'

class Subtotal extends PureComponent {

  handleSubmit = (e) => {
    this.props.dispatch({type:SUBTOTAL ,payload: e.target.value})
  }

  render() {
    const {base, sauce, topping} = this.props
    return (
      <div className="shoppingCart">
        <h2>Subtotal</h2>
        <h4><li>€{this.props.subtotal}</li></h4>

      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    subtotal: state.totsub
  }
}

export default connect(mapStateToProps)(Subtotal)
