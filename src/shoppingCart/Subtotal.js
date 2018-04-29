import React, { PureComponent } from 'react';
import {connect} from 'react-redux'

class Subtotal extends PureComponent {

  render() {

    return (
      <div className="shoppingCart">
        <h2>Subtotal</h2>
        <h4><li>€{Number(this.props.sauce)+Number(this.props.base)+ this.props.total}</li></h4>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    base: state.payBase,
    sauce: state.paySauce,
    total: state.totsub
  }
}

export default connect(mapStateToProps)(Subtotal)
