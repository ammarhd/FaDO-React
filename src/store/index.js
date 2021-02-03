import { configureStore } from "@reduxjs/toolkit";
import configSlice from "../features/configSlice";

export default configureStore({
  reducer: {
    configSlice: configSlice,
  },
});
