import {SUBTOTAL, REMOVE_SUBTOTAL} from '../actions/totSub'

export default (state = 0, action) => {
  switch(action.type) {
    case SUBTOTAL:
      return action.payload + state
    case REMOVE_SUBTOTAL:
      return state - action.payload
    default:
      return state
  }
}
