import {BASE, REM_BASE} from '../actions/bases'

export default (state = [], action) => {
  switch(action.type) {
    case BASE:
      return state.concat(action.payload)
    case REM_BASE:
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}
