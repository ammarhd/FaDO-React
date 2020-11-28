import {
  fado,
  layer1tx,
  layer2tx,
  layer3tx,
  layer3vec,
  pics0,
  pics1,
  pics2,
  pics3,
} from "./FaDO.js";
import { printOutput, printOutput4 } from "./printOutputs.js";
import { printPics1, printPics4 } from "./printPics.js";
var txsCount1 = 0;
var txsCount2 = 0;
var txsCount3 = 0;
var txsCount4 = 0;

var layer1Iteration = 0;
var layer2Iteration = 0;
var layer3Iteration = 0;

const generateOutput = () => {
  let newOutput = fado();
  printPics1(newOutput, pics0, "inflowLayer1");
  txsCount1++;
};

const generateOutput2 = () => {
  if (layer1Iteration < layer1tx.length) {
    printPics1(
      layer1tx[layer1Iteration],
      pics1[layer1Iteration],
      "outflowLayer2"
    );
    layer1Iteration++;
    txsCount2++;
  }
};

const generateOutput3 = () => {
  if (layer2Iteration < layer2tx.length) {
    printPics1(
      layer2tx[layer2Iteration],
      pics2[layer2Iteration],
      "outflowLayer3"
    );
    layer2Iteration++;
    txsCount3++;
  }
};

const generateOutput4 = () => {
  if (layer3Iteration < layer3tx.length) {
    printPics4(
      layer3tx[layer3Iteration],
      pics3[layer3Iteration],
      layer3vec[layer3Iteration],
      "outflowLayer4"
    );
    layer3Iteration++;
    txsCount4++;
  }
};

export {
  generateOutput,
  generateOutput2,
  generateOutput3,
  generateOutput4,
  txsCount1,
  txsCount2,
  txsCount3,
  txsCount4,
};
