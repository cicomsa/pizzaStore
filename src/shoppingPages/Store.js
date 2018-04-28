import React, { PureComponent } from 'react';
import PizzaBasePage from './PizzaBasePage'
import PizzaSaucePage from './PizzaSaucePage'
import PizzaToppingsPage from './PizzaToppingsPage'
import {connect} from 'react-redux'

class Store extends PureComponent {
  render() {
    return (
      <div className="store">
        <h1>NewAgePizza.com</h1>
        {this.props.baseStore.length === 0 && <PizzaBasePage/>}
        {this.props.sauceStore.length === 0 && this.props.baseStore.length === 1 && <PizzaSaucePage/>}
        {this.props.sauceStore.length === 1 && this.props.baseStore.length === 1 && this.props.toppingStore.length <= 2 && <PizzaToppingsPage/>}
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    sauceStore: state.sauce,
    baseStore:state.base,
    toppingStore: state.topping
  }
}

export default connect(mapStateToProps)(Store)
