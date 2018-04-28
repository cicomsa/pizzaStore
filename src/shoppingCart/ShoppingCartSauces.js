import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {ADD_SAUCE, REMOVE_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class ShoppingCartSauces extends PureComponent {

  render() {

    return (
      <div>
        <h2>Pizza Sauces</h2>
          {this.props.sauce.map((sauce,index) => (
            <h4 key={index}>
              <li>{sauce.split(',')[0]}</li>
              <p className="saucePrice">€{sauce.split(',')[1]}</p>
            </h4>)) }
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
