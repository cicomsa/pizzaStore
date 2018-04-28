import React, { PureComponent } from 'react';
import {ADD_DELIVERY, REMOVE_DELIVERY} from '../actions/delivery'

export default class HomeDeliveryForm extends PureComponent {

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
      <div className="homeDelivery">
          <label htmlFor="0.1">Home delivery : 10% additional to your shopping cart total</label>
          <br></br>
          <input type="checkbox"
          name="delivery"
          value="0.1"
          />
      </div>
    );
  }
}
