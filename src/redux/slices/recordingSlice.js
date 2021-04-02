import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  record: false,
  record_text: "Start Recording",
  record_color: "default",
};

const recordSlice = createSlice({
  name: "recording_status",
  initialState,
  reducers: {
    setRecordStatus: (state, { payload }) => {
      console.log(payload);

      state.record = !state.record;
      state.record_color = payload[0];
      state.record_text = payload[1];
    },
  },
});

export default recordSlice.reducer;

export const { setRecordStatus } = recordSlice.actions;

export const recordSelector = (state) => state.recording_status;
