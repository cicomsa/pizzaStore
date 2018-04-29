export const ADD_SAUCE = "ADD_SAUCE"
export const REMOVE_SAUCE = "REMOVE_SAUCE"
export const PAY_SAUCE = "PAY_SAUCE"
export const REMOVE_PAY_SAUCE = "REMOVE_PAY_SAUCE"
export const SAUCE = "SAUCE"
export const REM_SAUCE = "REM_SAUCE"

export const addSauce = () => {
  return {
    type: ADD_SAUCE
  }
}

export const removeSauce = (id) => {
  return {
    type: REMOVE_SAUCE,
    payload: id
  }
}

export const paySauce = () => {
  return {
    type: PAY_SAUCE
  }
}

export const removePaySauce = (id) => {
  return {
    type: REMOVE_PAY_SAUCE,
    id
  }
}

export const addS = () => {
  return {
    type: SAUCE
  }
}

export const remS = () => {
  return {
    type: REM_SAUCE
  }
}
