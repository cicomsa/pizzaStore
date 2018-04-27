import React, {PureComponent} from 'react'
import {pizzaBases} from '../pizzaStore/pizzaBases'
import './PizzaBases.css'
import {ADD_ITEM, REMOVE_ITEM} from '../actions/checkbox'
import {connect} from 'react-redux'

class PizzaBasePage extends PureComponent {

  constructor(props) {
    super(props);

    this.state = {
      checkboxState: true
    }
  }


  toggle(event) {
    this.setState({
      checkboxState: !this.state.checkboxState
    });
  }

  handleCheckbox = (e) => {
    if (this.state.checkboxState)
      return this.props.dispatch({type:ADD_ITEM,payload: e.target.value})
    if (!this.state.checkboxState)
      return this.props.dispatch({type:REMOVE_ITEM, payload: e.target.value})
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
            {pizzaBases.map(pizzaBase => (
              <tr key={pizzaBase.id}>
                <td className="base">
                  <input key={pizzaBase.id} type="checkbox"
                    name="base"
                    value={pizzaBase.name}
                    onChange={this.handleCheckbox}
                    onClick={this.toggle.bind(this)}/>
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
    items:state.checkbox
  }
}

export default connect(mapStateToProps )(PizzaBasePage)
