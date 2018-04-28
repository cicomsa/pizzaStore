import {PAY_BASE} from '../actions/bases'

export default (state = [], action) => {
  switch(action.type) {
    case PAY_BASE:
      return state.concat(action.payload)
    default:
      return state
  }
}
