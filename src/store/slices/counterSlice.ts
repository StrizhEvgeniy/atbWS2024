import { createSlice } from "@reduxjs/toolkit";

export const {
  reducer,
  name,
  actions: { increment, decrement },
} = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, { payload }) => {
      state.count += payload;
    },
    decrement: (state, { payload }) => {
      state.count -= payload;
    },
  },
});
