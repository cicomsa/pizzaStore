import React, {PureComponent} from 'react'
import {connect} from 'react-redux'
import {ADD_TOPPING, PAY_TOPPING} from '../actions/toppings'
import {TOTAL} from '../actions/total'

class PizzaToppingPage extends PureComponent {

  handleCheckbox = (e) => {
    this.props.dispatch({type: ADD_TOPPING, payload: e.target.value.split(',')[0]})
    this.props.dispatch({type: PAY_TOPPING, payload: Number(e.target.value.split(',')[1])})
    this.props.dispatch({type: TOTAL, payload: Number(e.target.value.split(',')[1])})
  }
  render() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pizza Topping</th>
              <th className="priceTh">Price</th>
            </tr>
          </thead>
          <tbody>
            {this.props.pizzaToppings.map(pizzaTopping => (
              <tr key={pizzaTopping.id}>
                <td className="topping">
                  <form>
                    <input key={pizzaTopping.id} type="checkbox"
                      name="topping"
                      value={[pizzaTopping.name, pizzaTopping.price]}
                      onChange={this.handleCheckbox}
                      
                    />
                    <label htmlFor="topping">{pizzaTopping.name}</label>
                  </form>
                </td>
                <td className="price">€{pizzaTopping.price}</td>
              </tr>)) }
            </tbody>
        </table>
         <p>Three different toppings only</p>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    pizzaToppings: state.pizzaToppingss
  }
}

export default connect(mapStateToProps)(PizzaToppingPage)
