import React, {PureComponent} from 'react'
import {REM_BASE, PAY_BASE} from '../actions/bases'
import {connect} from 'react-redux'

class ShoppingCartBases extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type:REM_BASE,payload: e.target.value})
  }

  handleConfirm = (e) => {
      this.props.dispatch({type:PAY_BASE,payload: e.target.value})
  }

  render() {

    return (
      <div>
        <h1>Pizza Base</h1>
        {this.props.base.map((base,index) => (
          <h4 key={index}>
            <p>{base.split(',')[0]}</p>
            <li className="basePrice">€{base.split(',')[1]}</li>
          </h4>)) }
        <button onClick={this.handleCheckbox}>Edit choice</button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    base: state.base
  }
}

export default connect(mapStateToProps )(ShoppingCartBases)
