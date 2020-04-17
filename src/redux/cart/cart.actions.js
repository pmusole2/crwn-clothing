import {
  TOGGLE_CART_HIDDEN,
  ADD_ITEM,
  CLEAR_ITEM_FROM_CART,
  REMOVE_ITEM,
} from '../types';

// Function to show or hide the drop down cart
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

// Function to add items to the cart
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

// Clear Item From Cart
export const clearItemFromCart = (item) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: item,
});

// Remove Item
export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
});
