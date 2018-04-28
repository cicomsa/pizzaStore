import {SAUCE, REM_SAUCE} from '../actions/sauces'

export default (state = [], action) => {
  switch(action.type) {
    case SAUCE:
      return state.concat(action.payload)
    case REM_SAUCE:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
