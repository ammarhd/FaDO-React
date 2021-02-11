import { createSlice } from "@reduxjs/toolkit";

export const configSlice = createSlice({
  name: "configs",
  initialState: {
    configs: {
      tx: {
        features: [],
        options: {},
      },
      visualization: {},
      txToVec: {
        method: "",
        features: [],
      },
    },
  },
  reducers: {
    setConfigFile: (state, action) => {
      return {
        configs: action.payload,
      };
    },
  },
});

export const { setConfigFile } = configSlice.actions;

export default configSlice.reducer;
