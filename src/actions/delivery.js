export const ADD_DELIVERY = "ADD_DELIVERY"
export const REMOVE_DELIVERY = "REMOVE_DELIVERY"

export const addDelivery = () => {
  return {
    type: ADD_DELIVERY
  }
}

export const removeDelivery = () => {
  return {
    type: REMOVE_DELIVERY
  }
}
