import { configureStore } from '@reduxjs/toolkit';

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
import { contactReducer } from './contacts-reducer';
import { filterReducer } from './filter-reducer';
import { userReducer } from './auth/auth-reducers';

//для  сохранения токена  в  local  storage  чтобы  данные текущего польз  можно
//было взять при перезагрузке страницы

///это то что будем  сохранять
const authPersistConfig = {
  key: 'authtoken',
  storage,
  whitelist: ['token'],
};
// const persistedUserRed = persistReducer(authPersistConfig, userReducer);

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    user: persistReducer(authPersistConfig, userReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line
export default { store, persistor };
