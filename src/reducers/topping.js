import {TOPPING, REM_TOPPING} from '../actions/toppings'

export default (state = [], action) => {
  switch(action.type) {
    case TOPPING:
      return state.concat(action.payload)
    case REM_TOPPING:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
