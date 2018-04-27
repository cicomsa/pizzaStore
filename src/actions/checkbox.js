export const ADD_ITEM = "ADD_ELEMENT"
export const REMOVE_ITEM = "REMOVE_ELEMENT"

export const add_item = () => {
  return {
    type: ADD_ITEM,

  }
}

export const remove_item = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id
  }
}
