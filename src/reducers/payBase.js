import {PAY_BASE, REMOVE_PAY_BASE} from '../actions/bases'

export default (state = 0, action) => {
  switch(action.type) {
    case PAY_BASE:
      return state + action.payload
    case REMOVE_PAY_BASE:
      return state-action.payload
    default:
      return state
  }
}
