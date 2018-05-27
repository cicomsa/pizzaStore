import {PAY_TOPPING, REMOVE_PAY_TOPPING} from '../actions/toppings'

export default (state = [], action) => {
  switch(action.type) {
    case PAY_TOPPING:
      return state.concat(action.payload)
    case REMOVE_PAY_TOPPING:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
