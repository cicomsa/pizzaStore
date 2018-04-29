import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {REM_TOPPING, REMOVE_PAY_TOPPING} from '../actions/toppings'
import {connect} from 'react-redux'

class ShoppingCartToppings extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type: REM_TOPPING,payload: e.target.value})
      this.props.dispatch({type: REMOVE_PAY_TOPPING,payload: e.target.value})
  }

  render() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pizza Base</th>
              <th className="priceTh">Price</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <table >
                <tbody>
                  {this.props.name.map((name, index) => (
                    <tr key={index}>
                      <td >{name}</td>
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
                          <td>{price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
