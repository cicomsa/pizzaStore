import {TOTAL, REMOVE_TOTAL} from '../actions/total'

export default (state = 0, action) => {
  switch(action.type) {
    case TOTAL:
      return state + action.payload
      case REMOVE_TOTAL:
        return 0
    default:
      return state
  }
}
