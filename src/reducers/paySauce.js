import {PAY_SAUCE} from '../actions/sauces'

export default (state = [], action) => {
  switch(action.type) {
    case PAY_SAUCE:
      return state.concat(action.payload)
    default:
      return state
  }
}
