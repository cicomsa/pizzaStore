import React, {PureComponent} from 'react'
import {REMOVE_TOPPING, REMOVE_PAY_TOPPING} from '../actions/toppings'
import {REMOVE_TOTAL} from '../actions/total'
import {connect} from 'react-redux'

class ShoppingCartToppings extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type: REMOVE_TOPPING,payload: e.target.value})
      this.props.dispatch({type: REMOVE_PAY_TOPPING, payload: e.target.value})
      this.props.dispatch({type: REMOVE_TOTAL})
  }

  render() {

    return (
      <div>
        <hr></hr>
        <table>
          <thead>
            <tr>
              <th className="nameThTop">Pizza Topping</th>
              <th className="priceThTop">Price</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <table >
                <tbody>
                  {this.props.name.map((name, index) => (
                    <tr key={index}>
                      <td className="nameTop">{name}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
                </td>
                <td>
                  <table >
                    <tbody>
                      {this.props.price.map((price, index) => (
                        <tr key={index}>
                          <td className="priceTop">€{(price).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
            <tbody>
            <tr>
              <td>
              {this.props.name.length === 3 && <button className="top" onClick={this.handleCheckbox}>Edit choice</button>}
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
    name: state.toppings,
    price: state.payTopping
  }
}


export default connect(mapStateToProps )(ShoppingCartToppings)
