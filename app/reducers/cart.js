import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cart: [],
  selectedSubCategory: '',
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log('Current state.cart:', state.cart)
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
    selectedSubCategory: (state, action) => {
      state.selectedSubCategory = action.payload
    },
  },
})

export const { addToCart, removeFromCart, clearCart, selectedSubCategory } =
  cartSlice.actions

export default cartSlice.reducer

// Selector to get the number of items in the cart
export const cartItemCount = (state) => state.cart.cart.length
