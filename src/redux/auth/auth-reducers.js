import { createReducer } from '@reduxjs/toolkit';
import operations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

export const userReducer = createReducer(initialState, {
  [operations.register.fulfilled]: (state, action) => {
    console.log(action.payload);
    /////state  это  1  пользователь
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  // [operations.register.rejected]: (state, action) => {

  // }
  [operations.logIn.fulfilled]: (state, action) => {
    console.log(action.payload);
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
  },
  [operations.logOut.fulfilled]: (state, action) => {
    console.log(action.payload);
    state.user = { name: null, email: null };
    state.token = null;
    state.isLoggedIn = false;

    //delete token  and  clear  state
  },
  [operations.fetchCurrentUser.pending]: (state, actions) => {
    state.isRefreshing = true;
  },
  [operations.fetchCurrentUser.fulfilled]: (state, actions) => {
    console.log(actions.payload);
    state.user = actions.payload;
    state.isLoggedIn = true;
    state.isRefreshing = false;
  },
  [operations.fetchCurrentUser.rejected]: (state, action) => {
    state.isRefreshing = false;
  },
});
