import { createSelector } from 'reselect';

const selectShopData = (state) => state.shop;

export const selectShop_Data = createSelector(
  [selectShopData],
  (shop) => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectShop_Data],
  (collections) => Object.keys(collections).map((key) => collections[key])
);

export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectShop_Data],
    (collections) => collections[collectionUrlParam]
  );
