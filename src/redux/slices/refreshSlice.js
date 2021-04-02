import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  refreshStatus: false,
};

const refreshSlice = createSlice({
  name: "refresh_status",
  initialState,
  reducers: {
    setRefreshStatus: (state) => {
      state.refreshStatus = !state.refreshStatus;
    },
  },
});

export default refreshSlice.reducer;

export const { setRefreshStatus } = refreshSlice.actions;

export const refreshSelector = (state) => state.refresh_status;
