export const TOTAL = "TOTAL"
export const SUBTOTAL = "SUBTOTAL"

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
