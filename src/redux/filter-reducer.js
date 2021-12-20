import { createReducer } from "@reduxjs/toolkit";
import { changeFilter } from "./actions";

export const filterReducer = createReducer("", {
  [changeFilter]: (state, action) => {
    // console.log(state);
    console.log(action);
    console.log(action.payload);
    return action.payload;
  },
});
