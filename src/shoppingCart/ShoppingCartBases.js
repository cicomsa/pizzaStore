import React, {PureComponent} from 'react'
import {REMOVE_BASE} from '../actions/bases'
import {connect} from 'react-redux'

class ShoppingCartBases extends PureComponent {

  handleCheckbox = (e) => {
      this.props.dispatch({type:REMOVE_BASE,payload: e.target.value})
  }

  render() {

    return (
      <div>
        <h1>Pizza Base</h1>
          {this.props.base.map((base, index) => (
            <h4 key={index}>
              <li>{base.split(',')[0]}</li>
              <p className="basePrice">€{base.split(',')[1]}</p>
            </h4>)) }
        <button onClick={this.handleCheckbox}>Edit choice</button>
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    base:state.bases
  }
}

export default connect(mapStateToProps )(ShoppingCartBases)
