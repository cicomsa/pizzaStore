import {ADD_TOPPING, REMOVE_TOPPING} from '../actions/toppings'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_TOPPING:
      return state.concat(action.payload)
    case REMOVE_TOPPING:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
