import React, {PureComponent} from 'react'
import {pizzaBases} from '../pizzaStore/pizzaBases'
import PizzaBaseForm from './PizzaBaseForm'
import './PizzaBases.css'

export default class PizzaBasePage extends PureComponent {
  render() {
    return (
      <div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Pizza Base</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          { pizzaBases.map(pizzaBase => (
            <tr key={pizzaBase.id}>
              <td className="checkbox"><PizzaBaseForm/></td>
              <td className="pizzaName">{pizzaBase.name}</td>
              <td className="pizzaPrice">€{pizzaBase.price}</td>
            </tr>)) }
          </tbody>
        </table>
      </div>
    )
  }
}
