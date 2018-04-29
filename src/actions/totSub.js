export const TOTAL = "TOTAL"
export const SUBTOTAL = "SUBTOTAL"
export const REMOVE_TOTAL = "REMOVE_TOTAL"
export const REMOVE_SUBTOTAL = "REMOVE_SUBTOTAL"

export const total = () => {
  return {
    type: TOTAL
  }
}

export const subtotal = () => {
  return {
    type: SUBTOTAL
  }
}

export const removeTotal = () => {
  return {
    type: REMOVE_TOTAL
  }
}

export const removeSubtotal = () => {
  return {
    type: REMOVE_SUBTOTAL
  }
}
