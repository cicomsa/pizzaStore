export const ADD_BASE = "ADD_BASE"
export const REMOVE_BASE = "REMOVE_BASE"
export const PAY_BASE = "PAY_BASE"
export const REMOVE_PAY_BASE = "REMOVE_PAY_BASE"

export const addBase = (id) => {
  return {
    type: ADD_BASE,

  }
}

export const removeBase = (id) => {
  return {
    type: REMOVE_BASE,
    payload: id
  }
}

export const payBase = () => {
  return {
    type: PAY_BASE,

  }
}

export const removePayBase = (id) => {
  return {
    type: REMOVE_PAY_BASE,
    id
  }
}
