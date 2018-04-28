import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import HomeDelivery from './HomeDeliveryForm'
import {ADD_DELIVERY, REMOVE_DELIVERY} from '../actions/delivery'

class ToPay extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      checkboxState: true,
      state: []
    }
  }

  toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
  }

  handleCheckbox = (e) => {
    if (this.state.checkboxState)
      return this.props.dispatch({type:ADD_DELIVERY,payload: e.target.value})
    if (!this.state.checkboxState)
      return this.props.dispatch({type:REMOVE_DELIVERY, payload: e.target.value})
  }

  render() {

    return (
      <div className="shoppingCart">
        <h2>Subtotal</h2>
        <h4><li>€{this.props.subtotal}</li></h4>
        <div className="homeDelivery">
            <label htmlFor="0.1">Home delivery : 10% additional to your shopping cart total</label>
            <br></br>
            <input type="checkbox"
            name="delivery"
            value="0.1"
            onChange={this.handleCheckbox}
            onClick={this.toggle.bind(this)}
            />
        </div>

      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    subtotal: state.totsub
  }
}

export default connect(mapStateToProps)(ToPay)
