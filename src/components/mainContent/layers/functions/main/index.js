import { tx2vec } from "../tex2vec";
import { fado, check_inititial_value } from "../FaDO";
import store from "../../../../../redux/store";
import { checkConfigration } from "../FaDO/adminstration";
import { set_counts } from "../outputs";

var check_status = false;
var txx = [];
var i = 0;

// check if there is data from the backend
var check_backend = false;

export const wholeCheck = () => {
  check_status = false;

  const state = store.getState();
  //var txFeatures = state.configs.configs.tx.features;
  txx = state.txs.txs;

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

/// with backend dataset

export const wholeCheck_backend = (dataa) => {
  check_backend = true;

  var vec_length = tx2vec(dataa);
  check_inititial_value(vec_length);

  checkConfigration();
  set_counts();
};

// when data comming from backend
var allTxs = [];
var lengthT = 0;
export const stream = (transaction) => {
  allTxs = [...allTxs, ...transaction];
};

/////////
export const main = () => {
  if (check_status && !check_backend) {
    var txsLine = getTx();
    i++;
    var vector = tx2vec(txsLine);
    fado(txsLine, vector);
  } else if (check_backend) {
    lengthT = allTxs.length;
    if (allTxs.length > 0) {
      var single_trx = allTxs.shift();
      var vector = tx2vec(single_trx);
      fado(single_trx, vector);
    } else {
      lengthT = allTxs.length;
      //console.log(`no tx : ${allTxs.length}`);
    }
  }
};

const getTx = () => {
  if (i === txx.length) {
    i = 0;
  }
  return txx[i];
};

export { lengthT };
