export const TOTAL = "TOTAL"
export const REMOVE_TOTAL = "REMOVE_TOTAL"


export const total = () => {
  return {
    type: TOTAL
  }
}

export const removeTotal = () => {
  return {
    type: REMOVE_TOTAL
  }
}
