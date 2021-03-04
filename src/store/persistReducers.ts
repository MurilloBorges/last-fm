import { Reducer } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers: Reducer) => {
  const persistedReducer = persistReducer(
    {
      key: process.env.REACT_APP_PERSIST as string,
      storage,
      whitelist: ['history', 'header', 'auth'],
    },
    reducers
  );
  return persistedReducer;
};
