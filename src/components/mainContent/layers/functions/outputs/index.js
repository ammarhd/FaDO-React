import printOutput from "./printTxs.js";
import { printPics1 } from "./visualTxs2.js";
import printPics2 from "./visualTxs3.js";
import store from "../../../../../redux/store";

var txsCount0 = 0;
var txsCount1 = 0;
var txsCount2 = 0;
var txsCount3 = 0;

export const generateOutput0 = (transaction) => {
  let tx = transaction;
  printOutput(tx, "inflowLayer1");
  txsCount0++;
  //counter0(txsCount0);
};

export const generateOutput1 = (transaction) => {
  let tx = transaction;
  printOutput(tx, "outflowLayer2");
  txsCount1++;
  //counter1(txsCount1);
};

export const generateOutput2 = (transaction) => {
  let tx = transaction;
  printPics1(tx, "outflowLayer3");
  txsCount2++;
  //counter2(txsCount2);
};

export const generateOutput3 = (transaction, vec) => {
  let tx = transaction;
  let vector = vec;
  printPics2(tx, vector, "outflowLayer4");
  txsCount3++;
  //counter3(txsCount3);
};

export const set_counts = () => {
  const state = store.getState();

  //check if there is kpi
  var config = state.configs.configs;
  //var config = config.map((item) => item.toLowerCase());
  if (config.hasOwnProperty("kpi")) {
    txsCount0 = config.kpi.txsCount0;
    txsCount1 = config.kpi.txsCount1;
    txsCount2 = config.kpi.txsCount2;
    txsCount3 = config.kpi.txsCount3;
  } else {
    txsCount0 = 0;
    txsCount1 = 0;
    txsCount2 = 0;
    txsCount3 = 0;
  }
};

export { txsCount0, txsCount1, txsCount2, txsCount3 };
