//import { generateTx } from "./generate_txt.js";
import { tx2vec } from "./tex2vec.js";
import { fado, check_inititial_value } from "./FaDO";
import store from "../../../../redux/store";
import { checkConfigration } from "./FaDO/adminstration";
import { set_counts } from "./outputs";

var check_status = false;
var txx = [];
var i = 0;

export const wholeCheck = () => {
  check_status = false;

  const state = store.getState();
  var txFeatures = state.configs.configs.tx.features;
  txx = state.txs.txs;
  console.log(txFeatures.length);
  console.log(txx.length);

  var vec_length = tx2vec(txx[0]);
  check_inititial_value(vec_length);

  //check if there is kpi
  var config = state.configs.configs;
  //var config = config.map((item) => item.toLowerCase());
  if (config.hasOwnProperty("kpi")) {
    var layer0count = config.kpi.layer0count;
    i = layer0count % 100;
  } else {
    i = 0;
  }

  checkConfigration();
  set_counts();

  check_status = true;
};

/////////
const main = () => {
  if (check_status) {
    //var txsLine = generateTx();
    var txsLine = getTx();
    i++;
    var vector = tx2vec(txsLine);
    fado(txsLine, vector);
  }
};

export default main;

const getTx = () => {
  if (i === txx.length) {
    i = 0;
  }
  return txx[i];
};
