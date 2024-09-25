// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalItems: 0,
  },
  reducers: {
    addToCart(state, action) {
      const newTotal = state.totalItems + (action.payload ?? 1); // Calculate new total
      const MAX_ITEMS = 75; // Maximum items allowed

      if (newTotal <= MAX_ITEMS) {
        state.totalItems = newTotal; // Update total items only if within limit
        console.log("Total items in cart:", state.totalItems);
      } else {
        console.warn(
          `Cannot add ${action.payload} items. Limit is ${MAX_ITEMS}.`
        ); // Log a warning
      }
    },
    removeFromCart(state, action) {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index !== -1 || state.totalItems > 0) {
        // state.items.splice(index, 1);
        state.totalItems -= action.payload ?? 1; // Decrement total items only if greater than 0
        console.log("Total items in cart:", state.totalItems);
      }
    },
    clearCart(state) {
      state.items = [];
      state.totalItems = 0; // Reset total items
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
