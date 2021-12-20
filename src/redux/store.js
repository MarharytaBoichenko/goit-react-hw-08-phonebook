import { combineReducers, configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { contactReducer } from "./contacts-reducer";
import { filterReducer } from "./filter-reducer";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(logger);

//корневой reducer
const rootReducer = combineReducers({
  contacts: contactReducer,
  filter: filterReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

export default store;
