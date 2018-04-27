import {CHECKBOX} from '../actions/checkbox'

export default (state = [], action) => {
  switch(action.type) {
    case CHECKBOX:
      return state.concat(action.payload)

    default:
      return state
  }
}
