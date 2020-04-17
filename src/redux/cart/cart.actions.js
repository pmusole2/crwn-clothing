import { TOGGLE_CART_HIDDEN, ADD_ITEM } from '../types';

// Function to show or hide the drop down cart
export const toggleCartHidden = () => ({
  type: TOGGLE_CART_HIDDEN,
});

// Function to add items to the cart
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});
