import { combineReducers } from "redux";

import txsReducer from "./txsSlice";
import configsReducer from "./configSlice";
import recording_statusReducer from "./recordingSlice";
import refresh_statusReducer from "./refreshSlice";

export const rootReducer = combineReducers({
  txs: txsReducer,
  configs: configsReducer,
  recording_status: recording_statusReducer,
  refresh_status: refresh_statusReducer,
});
