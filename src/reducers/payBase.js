import {PAY_BASE, REMOVE_PAY_BASE} from '../actions/bases'

export default (state = [], action) => {
  switch(action.type) {
    case PAY_BASE:
      return state.concat(action.payload)
    case REMOVE_PAY_BASE:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
