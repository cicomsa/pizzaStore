import React, {PureComponent} from 'react'
import './PizzaBases.css'
import {ADD_BASE, PAY_BASE, BASE} from '../actions/bases'
import {connect} from 'react-redux'

class PizzaBasePage extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type: ADD_BASE, payload: e.target.value.split(',')[0]})
      this.props.dispatch({type: BASE, payload: e.target.value})
      this.props.dispatch({type: PAY_BASE, payload: Number(e.target.value.split(',')[1])})
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
            {this.props.pizzaBases.map((pizzaBase, index) => (
              <tr key={pizzaBase.id}>
                <td className="base">
                  <input key={pizzaBase.id} type="checkbox"
                    name="base"
                    value={[pizzaBase.name, pizzaBase.price]}
                    onChange={this.handleCheckbox}
                  />
                  <label htmlFor="base">{pizzaBase.name}</label>
                </td>
                <td className="pizzaPrice">€{pizzaBase.price}</td>
                </tr>)) }
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    pizzaBases:state.pizzaBasess,
    price: state.payBase
  }
}

export default connect(mapStateToProps)(PizzaBasePage)
