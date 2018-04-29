import React, {PureComponent} from 'react'
import {REMOVE_SAUCE,REMOVE_PAY_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class ShoppingCartSauces extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type: REMOVE_SAUCE, payload: e.target.value})
      this.props.dispatch({type: REMOVE_PAY_SAUCE, payload: e.target.value})
  }

  render() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pizza Sauce</th>
              <th className="priceShop">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">{this.props.name}</td>
              <td className="priceShop">€{this.props.price}</td>
            </tr>
          </tbody>
          <button onClick={this.handleCheckbox}>Edit choice</button>
        </table>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    name: state.sauces,
    price: state.paySauce
  }
}
export default connect(mapStateToProps )(ShoppingCartSauces)
