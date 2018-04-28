import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {ADD_SAUCE, REMOVE_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class PizzaSaucePage extends PureComponent {

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
      return this.props.dispatch({type:ADD_SAUCE,payload: e.target.value})
    if (!this.state.checkboxState)
      return this.props.dispatch({type:REMOVE_SAUCE, payload: e.target.value})
  }

  render() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Pizza Sauce</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {pizzaSauces.map(pizzaSauce => (
              <tr key={pizzaSauce.id}>
                <td className="sauce">
                  <input key={pizzaSauce.id} type="checkbox"
                    name="sauce"
                    value={pizzaSauce.name}
                    onChange={this.handleCheckbox}
                    onClick={this.toggle.bind(this)}/>
                  <label htmlFor="sauce">{pizzaSauce.name}</label>
                </td>
                <td className="saucePrice">€{pizzaSauce.price}</td>
              </tr>)) }
            </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    items:state.sauces
  }
}

export default connect(mapStateToProps)(PizzaSaucePage)
