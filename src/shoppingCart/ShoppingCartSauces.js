import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {ADD_SAUCE, REMOVE_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class ShoppingCartSauces extends PureComponent {

  render() {

    return (
      <div>
        <h2>Pizza Toppings</h2>
          {this.props.sauce.map((sauce,index) => (
            <p key={index}>
              <li>{sauce}</li>
              <p className="saucePrice">€{sauce.price}</p>
            </p>)) }
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    sauce:state.sauces
  }
}

export default connect(mapStateToProps )(ShoppingCartSauces)
