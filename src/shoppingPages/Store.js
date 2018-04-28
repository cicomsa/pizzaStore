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
        {this.props.base.length === 0 && <PizzaBasePage/>}
        {this.props.sauce.length === 0 && this.props.base.length === 1 && <PizzaSaucePage/>}
        {this.props.sauce.length === 1 && this.props.base.length === 1 && this.props.topping.length <= 2 && <PizzaToppingsPage/>}
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

export default connect(mapStateToProps)(Store)
