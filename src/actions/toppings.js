export const ADD_TOPPING = "ADD_TOPPING"
export const REMOVE_TOPPING = "REMOVE_TOPPING"

export const add_topping = () => {
  return {
    type: ADD_TOPPING,

  }
}

export const remove_topping = (id) => {
  return {
    type: REMOVE_TOPPING,
    payload: id
  }
}
