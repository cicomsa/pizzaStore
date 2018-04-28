import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {ADD_SAUCE, REMOVE_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class ShoppingCartBases extends PureComponent {

  render() {

    return (
      <div>
        <h2>Pizza Base</h2>
          {this.props.base.map((base,index) => (
            <p key={index}>
              <li>{base}</li>
              <p className="basePrice">€{base.price}</p>
            </p>)) }
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    base:state.bases
  }
}

export default connect(mapStateToProps )(ShoppingCartBases)
