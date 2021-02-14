import { generateTx } from "./generate_txt.js";
import { tx2vec } from "./tex2vec.js";
import { fado } from "./FaDO";
import store from "../../../../store";

var i = 0;
const main = () => {
  const state = store.getState();
  var txFeatures = state.configSlice.configs.tx.features;
  var txx = state.txsSlice.txs;

  if (txFeatures.length > 1 && txx.length > 1) {
    //var txsLine = generateTx();
    var txsLine = getTx();
    i++;
    var vector = tx2vec(txsLine);
    fado(txsLine, vector);
  }
};

export default main;

const getTx = () => {
  const state = store.getState();
  var txx = state.txsSlice.txs;
  if (i === 99) {
    i = 0;
  }
  return txx[i];
};
