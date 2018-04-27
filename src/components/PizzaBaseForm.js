import React, {PureComponent} from 'react'
import {pizzaBases} from '../pizzaStore/pizzaBases'

export default class PizzaBaseForm extends PureComponent {
  render() {
    return (
      <div>
      <table>
        <th>Pizza Bases</th>
        <tbody>
          
          { pizzaBases.map(pizzaBase => (
            <tr key={pizzaBase.id}>
              <td><input type="checkbox"/>{pizzaBase.name}</td>
              <td>&euro; {pizzaBase.price}</td>
            </tr>)) }
          </tbody>
        </table>
      </div>
    )
  }
}
