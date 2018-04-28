export const ADD_BASE = "ADD_BASE"
export const REMOVE_BASE = "REMOVE_BASE"

export const add_base = () => {
  return {
    type: ADD_BASE
  }
}

export const remove_base = (id) => {
  return {
    type: REMOVE_BASE,
    payload: id
  }
}
