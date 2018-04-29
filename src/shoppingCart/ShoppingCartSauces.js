import React, {PureComponent} from 'react'
import {REM_SAUCE} from '../actions/sauces'
import {REMOVE_SUBTOTAL} from '../actions/totSub'
import {connect} from 'react-redux'

class ShoppingCartSauces extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type: REM_SAUCE, payload: e.target.value})
      this.props.dispatch({type: REMOVE_SUBTOTAL, payload: e.target.value})
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
