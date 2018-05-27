import {ADD_SAUCE, REMOVE_SAUCE} from '../actions/sauces'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_SAUCE:
      return state.concat(action.payload)
    case REMOVE_SAUCE:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
