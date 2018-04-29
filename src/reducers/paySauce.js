import {PAY_SAUCE, REMOVE_PAY_SAUCE} from '../actions/sauces'

export default (state = [], action) => {
  switch(action.type) {
    case PAY_SAUCE:
      return state.concat(action.payload)
    case REMOVE_PAY_SAUCE:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
