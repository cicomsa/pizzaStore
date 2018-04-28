import React, {PureComponent} from 'react'
import {REMOVE_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class ShoppingCartSauces extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type:REMOVE_SAUCE,payload: e.target.value})
  }

  render() {

    return (
      <div>
        <h1>Pizza Sauces</h1>
          {this.props.sauce.map((sauce,index) => (
            <h4 key={index}>
              <li>{sauce.split(',')[0]}</li>
              <p className="saucePrice">€{sauce.split(',')[1]}</p>
            </h4>)) }
        <button onClick={this.handleCheckbox}>Edit choice</button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    sauce:state.sauces
  }
}

export default connect(mapStateToProps )(ShoppingCartSauces)
