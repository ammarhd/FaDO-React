import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  txs: [],
  status: false,
  expertSys_status: false,
  expertSys_url: "",
};

const txsSlice = createSlice({
  name: "txs",
  initialState,
  reducers: {
    setTxsFile: (state, { payload }) => {
      state.txs = payload;
      state.status = true;
    },
    setExpertSys: (state, { payload }) => {
      state.expertSys_status = true;
      state.expertSys_url = payload;
    },
  },
});

export default txsSlice.reducer;
export const { setTxsFile, setExpertSys } = txsSlice.actions;

export const txsSelector = (state) => state.txs;
