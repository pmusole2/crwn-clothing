import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from './root-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewares = [logger];

// export const store = createStore(rootReducer, applyMiddleware(...middlewares));

/* export default () => {
  let store = createStore(persistedReducer, applyMiddleware(...middlewares));
  //let persistor = persistStore(store);
  return { store, persistor };
}; */

export const store = createStore(
  persistedReducer,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);
