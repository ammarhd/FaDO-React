import printOutput from "./printTxs.js";
import printPics1 from "./visualTxs2.js";
import printPics2 from "./visualTxs3.js";
import { counter0, counter1, counter2, counter3 } from "../counter2human";

var txsCount0 = 0;
var txsCount1 = 0;
var txsCount2 = 0;
var txsCount3 = 0;

const generateOutput0 = (transaction) => {
  let tx = transaction;
  printOutput(tx, "inflowLayer1");
  txsCount0++;
  counter0(txsCount0);
};

const generateOutput1 = (transaction) => {
  let tx = transaction;
  printOutput(tx, "outflowLayer2");
  txsCount1++;
  counter1(txsCount1);
};

const generateOutput2 = (transaction) => {
  let tx = transaction;
  printPics1(tx, "outflowLayer3");
  txsCount2++;
  counter2(txsCount2);
};

const generateOutput3 = (transaction) => {
  let tx = transaction;
  printPics2(tx, "outflowLayer4");
  txsCount3++;
  counter3(txsCount3);
};

export {
  generateOutput0,
  generateOutput1,
  generateOutput2,
  generateOutput3,
  txsCount0,
};
