import { configureStore } from "@reduxjs/toolkit";
import configSlice from "../features/configSlice";
import txsSlice from "../features/txsSlice";

export default configureStore({
  reducer: {
    configSlice: configSlice,
    txsSlice: txsSlice,
  },
});
