import React, {PureComponent} from 'react'
//import {pizzaBases} from '../pizzaStore/pizzaBases'
import PizzaBaseForm from './PizzaBaseForm'
import './PizzaBases.css'
import {ADD_ITEM, REMOVE_ITEM} from '../actions/checkbox'
import {connect} from 'react-redux'

class PizzaBasePage extends PureComponent {

	handleSubmit = (e) => {

    e.preventDefault()
		this.props.dispatch({type:ADD_ITEM,payload: e.target.value})
    //this.props.dispatch({type:REMOVE_ITEM, payload: this.state.value})
    e.preventDefault()

	}

  render() {


    return (
      <div>
      <table>
        <thead>
          <tr>
            <th>Pizza Base</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          { this.props.pizzaBases.map(pizzaBase => (
            <tr key={pizzaBase.id}>
              <td className="base">
                <input key={pizzaBase.id} type="checkbox" name="base" value={pizzaBase.name}
                 onChange={this.handleSubmit} />
                <label htmlFor="base">{pizzaBase.name}</label>
              </td>
              <td className="pizzaPrice">€{pizzaBase.price}</td>

            </tr>)) }
          </tbody>
        </table>
        <div>
        </div>
        <p>{this.props.items}</p>
      </div>
    )
  }
}

// <button type="submit" onClick={() => add_item()}>Submit</button>
// <button type="button"  onClick={() => remove_item() }>Clear</button>


const mapStateToProps = function (state) {
  return {
    pizzaBases: state.pizzaBases,
    items:state.checkbox
  }
}

export default connect(mapStateToProps )(PizzaBasePage)
