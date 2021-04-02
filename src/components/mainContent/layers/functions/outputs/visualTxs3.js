import "./output.css";
import { print_with_manualLabel } from "./manualLabel";
import { print_with_autoLabel } from "./autoLabel";
import store from "../../../../../redux/store";

var recorded_txs = [];

export const printPics2 = (token, vector, containerId) => {
  const state = store.getState();
  var record_status = state.recording_status.record;
  var autolabel_status = state.refresh_status.refreshStatus;
  var txFeatures = state.configs.configs.tx.features;

  if (record_status) {
    recorded_txs.push(token);
  } else if (!record_status && recorded_txs.length > 0) {
    export_config();
  }
  if (autolabel_status && txFeatures.includes("label")) {
    print_with_autoLabel(token, vector, containerId);
  } else {
    print_with_manualLabel(token, vector, containerId);
  }
};

export const export_config = async () => {
  const fileName = "file";
  const json = JSON.stringify(recorded_txs);
  const blob = new Blob([json], { type: "application/json" });
  const href = await URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  recorded_txs = [];
};

export default printPics2;
