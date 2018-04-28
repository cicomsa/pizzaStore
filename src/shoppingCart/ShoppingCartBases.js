import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {ADD_SAUCE, REMOVE_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class ShoppingCartBases extends PureComponent {

  render() {

    return (
      <div>
        <h2>Pizza Base</h2>
          {this.props.base.map((base, index) => (
            <h4 key={index}>
              <li>{base.split(',')[0]}</li>
              <p className="basePrice">€{base.split(',')[1]}</p>
            </h4>)) }
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
