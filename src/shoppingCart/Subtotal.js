import React, { PureComponent } from 'react';
import {connect} from 'react-redux'

class Subtotal extends PureComponent {

  render() {

    return (
      <div className="shoppingCart">
        <h2>Subtotal</h2>
        <h4><li>€{this.props.total - this.props.subtotal}</li></h4>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    total: state.totsub,
    subtotal: state.subtotal
  }
}

export default connect(mapStateToProps)(Subtotal)
