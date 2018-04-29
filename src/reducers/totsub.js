import {TOTAL} from '../actions/totSub'

export default (state = 0, action) => {
  switch(action.type) {
    case TOTAL:
      return state + action.payload
    default:
      return state
  }
}
