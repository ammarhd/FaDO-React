import { combineReducers } from "redux";

import txsReducer from "./txsSlice";
import configsReducer from "./configSlice";

export const rootReducer = combineReducers({
  txs: txsReducer,
  configs: configsReducer,
});
