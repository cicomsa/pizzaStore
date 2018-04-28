import React, {PureComponent} from 'react'
import './PizzaBases.css'
import {ADD_BASE} from '../actions/bases'
import {connect} from 'react-redux'

class PizzaBasePage extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type:ADD_BASE,payload: e.target.value})
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
            {this.props.pizzaBases.map(pizzaBase => (
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
    pizzaBases:state.pizzaBasess
  }
}

export default connect(mapStateToProps)(PizzaBasePage)
