import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "../slices";

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
