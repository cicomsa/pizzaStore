import React, {PureComponent} from 'react'
import {REM_SAUCE} from '../actions/sauces'
import {connect} from 'react-redux'

class ShoppingCartSauces extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type:REM_SAUCE,payload: e.target.value})
  }

  render() {

    return (
      <div>
        <h1>Pizza Sauces</h1>
        {this.props.sauceName.map((sauce,index) => (
          <h4 key={index}>
            <p>{sauce.split(',')[0]}</p>
            <li className="saucePrice">€{sauce.split(',')[1]}</li>
          </h4>)) }
        <button onClick={this.handleCheckbox}>Edit choice</button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    sauceName: state.sauce

  }
}

export default connect(mapStateToProps )(ShoppingCartSauces)
