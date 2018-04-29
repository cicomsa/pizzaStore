export const ADD_TOPPING = "ADD_TOPPING"
export const REMOVE_TOPPING = "REMOVE_TOPPING"
export const PAY_TOPPING = "PAY_TOPPING"
export const REMOVE_PAY_TOPPING = "REMOVE_PAY_TOPPING"
export const TOPPING = "TOPPING"
export const REM_TOPPING = "REM_TOPPING"

export const addTopping = () => {
  return {
    type: ADD_TOPPING
  }
}

export const removeTopping = (id) => {
  return {
    type: REMOVE_TOPPING,
    payload: id
  }
}

export const payTopping = () => {
  return {
    type: PAY_TOPPING
  }
}

export const removePayTopping = (id) => {
  return {
    type: REMOVE_PAY_TOPPING,
    id
  }
}

export const addTopp = () => {
  return {
    type: TOPPING
  }
}

export const remTopp = () => {
  return {
    type: REM_TOPPING
  }
}
