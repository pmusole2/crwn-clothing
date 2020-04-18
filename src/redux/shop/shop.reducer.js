import { ShopData } from '../../pages/shop/shop.data';

const initialState = {
  collections: ShopData,
};

export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
