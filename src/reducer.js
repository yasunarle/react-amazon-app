export const initialState = {
  basket: [
    {
      id: "12141213",
      title: "React new Book",
      price: 45,
      rating: 4,
      image:
        "https://prodimage.images-bn.com/pimages/9788850317714_p0_v1_s550x406.jpg",
    },
    {
      id: "12141213",
      title: "React new Book",
      price: 45,
      rating: 4,
      image:
        "https://prodimage.images-bn.com/pimages/9788850317714_p0_v1_s550x406.jpg",
    },
  ],
  user: null,
}

function reducer(state, action) {
  console.log(action)
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] }
    case "REMOVE_FROM_BASKET":
      let newBasket = [...state.basket]
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      )
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn("cant remove product")
      }
      return { ...state, basket: newBasket }
    default:
      return state
  }
}

export default reducer
