import {TOTAL, SUBTOTAL} from '../actions/totSub'

export default (state = [], action) => {
  switch(action.type) {
    case TOTAL:
      return state
    case SUBTOTAL:
      let array = state.concat(action.payload)
      return array
    default:
      return state
  }
}
