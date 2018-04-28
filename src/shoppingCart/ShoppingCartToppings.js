import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {REM_TOPPING} from '../actions/toppings'
import {connect} from 'react-redux'

class ShoppingCartToppings extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type:REM_TOPPING,payload: e.target.value})
  }

  render() {

    return (
      <div>
        <h1>Toppings</h1>
        {this.props.topping.map((topping,index) => (
          <h4 key={index}>
            <p>{topping.split(',')[0]}</p>
            <li className="toppingPrice">€{topping.split(',')[1]}</li>
          </h4>)) }
        {this.props.topping.length === 3 && <button onClick={this.handleCheckbox}>Edit choice</button>}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    topping: state.topping
  }
}

export default connect(mapStateToProps )(ShoppingCartToppings)
