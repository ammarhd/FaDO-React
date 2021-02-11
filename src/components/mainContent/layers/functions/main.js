import { generateTx } from "./generate_txt.js";
import { tx2vec } from "./tex2vec.js";
import { fado } from "./FaDO";
import store from "../../../../store";

const main = () => {
  const state = store.getState();
  var txFeatures = state.configSlice.configs.tx.features;

  if (txFeatures.length > 1) {
    var txsLine = generateTx();
    var vector = tx2vec(txsLine);
    fado(txsLine, vector);
  }
};

export default main;
