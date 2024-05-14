import { configureStore } from "@reduxjs/toolkit";
import {
  name as counterName,
  reducer as counterSlice,
} from "./slices/counterSlice";

export const store = configureStore({
  reducer: {
    [counterName]: counterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
