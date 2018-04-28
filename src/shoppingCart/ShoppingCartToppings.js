import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {ADD_SAUCE, REMOVE_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class ShoppingCartToppings extends PureComponent {

  render() {

    return (
      <div>
        <h2>Toppings</h2>
          {this.props.topping.map((base,index) => (
            <p key={index}>
              <li>{base}</li>
              <p className="toppingPrice">€{base.price}</p>
            </p>)) }
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
