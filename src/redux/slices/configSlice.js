import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
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
};

const configSlice = createSlice({
  name: "configs",
  initialState,
  reducers: {
    setConfigFile: (state, { payload }) => {
      state.configs = payload;
    },
  },
});

export default configSlice.reducer;

export const { setConfigFile } = configSlice.actions;

export const configsSelector = (state) => state.configs;
