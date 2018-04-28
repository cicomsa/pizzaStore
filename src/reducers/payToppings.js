import {PAY_TOPPING} from '../actions/toppings'

export default (state = [], action) => {
  switch(action.type) {
    case PAY_TOPPING:
      return state.concat(action.payload)
    default:
      return state
  }
}
