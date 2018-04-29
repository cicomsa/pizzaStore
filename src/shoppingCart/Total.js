import React, { PureComponent } from 'react';
import {connect} from 'react-redux'

class Subtotal extends PureComponent {
  render() {
    return (
      <div className="shoppingCart">
        <h2>Total</h2>
        <h4><li>€{this.props.subtotal + this.props.delivery}</li></h4>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    subtotal: state.totsub,
    delivery: state.delivery
  }
}

export default connect(mapStateToProps)(Subtotal)
