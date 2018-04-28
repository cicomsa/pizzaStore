import React, {PureComponent} from 'react'
import {ADD_TOPPING} from '../actions/toppings'
import {connect} from 'react-redux'

class PizzaToppingPage extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type:ADD_TOPPING,payload: e.target.value})
  }

  render() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pizza Topping</th>
              <th>Price</th>
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
                <td className="toppingPrice">€{pizzaTopping.price}</td>
              </tr>)) }
            </tbody>
        </table>
         <p style={{color:'red'}}>Three different toppings only</p>
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
