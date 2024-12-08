import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload)
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(
        (item) => item.cart_item_id !== action.payload.cart_item_id
      )
    },
    clearCart: (state) => {
      state.cart = []
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer

// Selector to get the number of items in the cart
export const cartItemCount = (state) => state.cart.cart.length
