import React, {PureComponent} from 'react'
import {ADD_SAUCE, PAY_SAUCE, SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class PizzaSaucePage extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type:ADD_SAUCE, payload: e.target.value.split(',')[0]})
      this.props.dispatch({type:PAY_SAUCE, payload: Number(e.target.value.split(',')[1])})
      this.props.dispatch({type:SAUCE, payload: e.target.value})
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
            {this.props.pizzaSauces.map(pizzaSauce => (
              <tr key={pizzaSauce.id}>
                <td className="sauce">
                  <input key={pizzaSauce.id} type="checkbox"
                    name="sauce"
                    value={[pizzaSauce.name, pizzaSauce.price]}
                    onChange={this.handleCheckbox}
                  />
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
    pizzaSauces: state.pizzaSaucess
  }
}

export default connect(mapStateToProps)(PizzaSaucePage)
