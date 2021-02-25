import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  txs: [],
};

const txsSlice = createSlice({
  name: "txs",
  initialState,
  reducers: {
    setTxsFile: (state, { payload }) => {
      state.txs = payload;
    },
  },
});

export default txsSlice.reducer;
export const { setTxsFile } = txsSlice.actions;

export const txsSelector = (state) => state.txs;
