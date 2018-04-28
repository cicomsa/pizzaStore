import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {ADD_SAUCE, REMOVE_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class ShoppingCartToppings extends PureComponent {

  render() {

    return (
      <div>
        <h2>Toppings</h2>
          {this.props.topping.map((topping,index) => (
            <h4 key={index}>
              <li>{topping.split(',')[0]}</li>
              <p className="toppingPrice">€{topping.split(',')[1]}</p>
            </h4>)) }
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    topping:state.toppings
  }
}

export default connect(mapStateToProps )(ShoppingCartToppings)
