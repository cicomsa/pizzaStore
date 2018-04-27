import {ADD_ITEM, REMOVE_ITEM} from '../actions/checkbox'

export default (state = [], action) => {
  switch(action.type) {
    case ADD_ITEM:
      return state.concat(action.payload)
    case REMOVE_ITEM:
      return state.filter(item => item !== action.payload)
    default:
      return state
  }
}
