export const ADD_SAUCE = "ADD_SAUCE"
export const REMOVE_SAUCE = "REMOVE_SAUCE"

export const add_sauce = () => {
  return {
    type: ADD_SAUCE
  }
}

export const remove_sauce = (id) => {
  return {
    type: REMOVE_SAUCE,
    payload: id
  }
}
