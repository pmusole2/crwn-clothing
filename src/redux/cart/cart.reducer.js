import { TOGGLE_CART_HIDDEN } from '../types';
const initialState = {
  hidden: true,
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};
