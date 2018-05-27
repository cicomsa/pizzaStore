import React, { PureComponent } from 'react';
import {connect} from 'react-redux'
import ShoppingCartBases from './ShoppingCartBases'
import ShoppingCartSauces from './ShoppingCartSauces'
import ShoppingCartToppings from './ShoppingCartToppings'
import './ShoppingCart.css'

class ShoppingCart extends PureComponent {
  render() {
    return (
      <div className="shoppingCart">
        <table>
          <tbody>
            <tr>
              <td>
                {this.props.baseCart.length === 1 && <ShoppingCartBases/>}
              </td>
              <td>
                {this.props.sauceCart.length === 1 && <ShoppingCartSauces/>}
             </td>
           </tr>
          </tbody>
        </table>
        {this.props.toppingCart.length >= 1 && 
          this.props.toppingCart.length <= 3 && <ShoppingCartToppings/>}
      </div>
    )
  }
}

const mapStateToProps = function (state) {
  return {
    sauceCart: state.sauces,
    baseCart:state.bases,
    toppingCart: state.toppings
  }
}

export default connect(mapStateToProps)(ShoppingCart)
