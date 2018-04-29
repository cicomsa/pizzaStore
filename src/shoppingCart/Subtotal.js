import React, { PureComponent } from 'react';
import {connect} from 'react-redux'

class Subtotal extends PureComponent {

  render() {

    return (
      <div className="shoppingCart">
        <h3>Subtotal</h3>
        <p>€{(Number(this.props.sauce)+Number(this.props.base)+ this.props.total).toFixed(2)}</p>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    base: state.payBase,
    sauce: state.paySauce,
    total: state.total
  }
}

export default connect(mapStateToProps)(Subtotal)
