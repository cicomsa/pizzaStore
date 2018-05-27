import {ADD_BASE, REMOVE_BASE} from '../actions/bases'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_BASE:
      return state.concat(action.payload)
    case REMOVE_BASE:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
