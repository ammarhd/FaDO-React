import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  txs: [],
  status: false,
};

const txsSlice = createSlice({
  name: "txs",
  initialState,
  reducers: {
    setTxsFile: (state, { payload }) => {
      state.txs = payload;
      state.status = true;
    },
  },
});

export default txsSlice.reducer;
export const { setTxsFile } = txsSlice.actions;

export const txsSelector = (state) => state.txs;
