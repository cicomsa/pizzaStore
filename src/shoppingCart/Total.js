import React, { PureComponent } from 'react';
import {connect} from 'react-redux'

class Total extends PureComponent {
  render() {
    return (
      <div className="shoppingCart">
        <h3>Total</h3>
        <p>€{(Number(this.props.sauce)+Number(this.props.base)+ this.props.total+this.props.delivery).toFixed(2)}</p>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    base: state.payBase,
    sauce: state.paySauce,
    total: state.total,
    delivery: state.delivery
  }
}

export default connect(mapStateToProps)(Total)
