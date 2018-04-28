import React, {PureComponent} from 'react'
import {pizzaSauces} from '../pizzaStore/pizzaSauces'
import {REMOVE_TOPPING} from '../actions/toppings'
import {connect} from 'react-redux'

class ShoppingCartToppings extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type:REMOVE_TOPPING,payload: e.target.value})
      this.setState = () => {
        checkbox: !this.state.checkbox
      }
  }

  render() {

    return (
      <div>
        <h1>Toppings</h1>
          {this.props.topping.map((topping,index) => (
            <h4 key={index}>
              <li>{topping.split(',')[0]}</li>
              <p className="toppingPrice">€{topping.split(',')[1]}</p>
            </h4>)) }
        {this.props.topping.length === 3 && <button onClick={this.handleCheckbox}>Edit choice</button>}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    topping:state.toppings,
  }
}

export default connect(mapStateToProps )(ShoppingCartToppings)
