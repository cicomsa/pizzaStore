import React, {PureComponent} from 'react'
import {REMOVE_BASE, REMOVE_PAY_BASE} from '../actions/bases'
import {connect} from 'react-redux'

class ShoppingCartBases extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type: REMOVE_BASE, payload: e.target.value})
      this.props.dispatch({type: REMOVE_PAY_BASE, payload: e.target.value})
  }

  render() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pizza Base</th>
              <th className="priceShop">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="name">{this.props.name}</td>
              <td className="priceShop">€{this.props.price}</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>
                <button onClick={this.handleCheckbox}>Edit choice</button>
              </td>
            </tr>
          </tbody>
        </table>

      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    name: state.bases,
    price: state.payBase
  }
}

export default connect(mapStateToProps )(ShoppingCartBases)
