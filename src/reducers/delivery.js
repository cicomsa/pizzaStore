import {ADD_DELIVERY, REMOVE_DELIVERY} from '../actions/delivery'

export default (state = 0, action) => {
  switch(action.type) {
    case ADD_DELIVERY:
      return 0.1
    case REMOVE_DELIVERY:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
