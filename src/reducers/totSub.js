import {TOTAL, SUBTOTAL} from '../actions/totSub'

export default (state = [], action) => {
  switch(action.type) {
    case TOTAL:
      return state + action.payload
    case SUBTOTAL:
      return state
    default:
      return state
  }
}
