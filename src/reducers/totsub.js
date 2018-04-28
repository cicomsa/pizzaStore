import {TOTAL, SUBTOTAL} from '../actions/totSub'

export default (state = 0, action) => {
  switch(action.type) {
    case TOTAL:
      return state
    case SUBTOTAL:
      return state + action.payload
    default:
      return state
  }
}
