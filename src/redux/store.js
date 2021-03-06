import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactReducer } from './contacts/contacts-reducer';
import { filterReducer } from './contacts/filter-reducer';
import { userReducer } from './auth/auth-reducers';

//для  сохранения токена  в  local  storage  чтобы  данные текущего польз  можно
//было взять при перезагрузке страницы

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

///это то что будем  сохранять
const authPersistConfig = {
  key: 'authtoken',
  storage,
  whitelist: ['token'],
};
// const persistedUserRed = persistReducer(authPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, userReducer),
    contacts: contactReducer,
    filter: filterReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
