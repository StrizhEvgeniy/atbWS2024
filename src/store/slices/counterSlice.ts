import { createSlice } from "@reduxjs/toolkit";

export const {
  reducer,
  name,
  actions: { increment },
} = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
  },
});