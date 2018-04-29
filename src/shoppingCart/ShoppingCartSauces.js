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
              <th className="priceTh">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.name}</td>
              <td></td>
              <td>€{this.props.price}</td>
            </tr>
          </tbody>
        </table>
        <button onClick={this.handleCheckbox}>Edit choice</button>
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
