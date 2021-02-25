import "./output.css";
import { print_with_manualLabel } from "./manualLabel";
import { print_with_autoLabel } from "./autoLabel";
import store from "../../../../../redux/store";

var type = 0;

export const label_type = (check) => {
  const state = store.getState();
  var txFeatures = state.configs.configs.tx.features;

  if (check === 1 && txFeatures.includes("label")) {
    type = 1;
  } else {
    type = 0;
  }
};

export const printPics2 = (token, vector, containerId) => {
  if (type === 0) {
    print_with_manualLabel(token, vector, containerId);
  } else {
    print_with_autoLabel(token, vector, containerId);
  }
};

export default printPics2;
