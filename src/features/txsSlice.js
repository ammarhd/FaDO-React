import { createSlice } from "@reduxjs/toolkit";

export const txsSlice = createSlice({
  name: "dataset",
  initialState: {
    txs: [],
  },
  reducers: {
    setTxsFile: (state, action) => {
      return {
        txs: action.payload,
      };
    },
  },
});

export const { setTxsFile } = txsSlice.actions;

export default txsSlice.reducer;
