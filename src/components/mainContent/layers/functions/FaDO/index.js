import fraudd from "./fraud.js";
import { adminstration } from "./adminstration.js";
import { arrayOfNorm } from "./arrayOfNorm.js";
import {
  generateOutput0,
  generateOutput1,
  generateOutput2,
  generateOutput3,
} from "../outputs";

var w = [];
var sumTX = [];
var averageTX = [];

var threshold = 1;
var norm = 0;
var alarm = 0;

var layer1tx = [];
var layer22tx = [];
var layer3tx = [];
var layer3vec = [];
var numFlagTx = 0;

var layer0count = 0;
var layer1count = 0;
var layer2count = 0;
var layer3count = 0;

/// x_axisfor the hist chartjs
var x_axis = [0, 0.76, 0.79, 0.82, 0.85, 0.88, 0.91, 0.94, 0.97, 1, 1.03, 3];

const setThreshold = (num) => {
  threshold = num;

  x_axis = [
    0,
    threshold - 0.24,
    threshold - 0.21,
    threshold - 0.18,
    threshold - 0.15,
    threshold - 0.12,
    threshold - 0.09,
    threshold - 0.06,
    threshold - 0.03,
    threshold,
    threshold + 0.03,
    threshold + 2,
  ];

  for (let i = 0; i < 11; i++) {
    var num = x_axis[i];
    x_axis[i] = num.toFixed(2);
  }
};

const fadoN = (normalVec) => {
  var l2norm = require("compute-l2norm");
  var y_vecN = normalVec;
  var vecMinusW = [];
  var v_t = [];
  var gamma = 0;
  var w_new = [];

  for (let i = 0; i < y_vecN.length; i++) {
    vecMinusW.push(y_vecN[i] - w[i]);
  }
  norm = l2norm(vecMinusW);
  //gamma = 1 / Math.sqrt(m_t);
  gamma = 0.1;
  for (let i = 0; i < y_vecN.length; i++) {
    v_t.push(vecMinusW[i] / norm);
    v_t[i] *= gamma;
    w_new.push(w[i] + v_t[i]);
  }

  w = w_new;
};

const fado = (transaction, vector) => {
  var l2norm = require("compute-l2norm");

  var tx = transaction;
  var vec = vector;
  var vecMinusW = [];

  if (layer0count === 0) {
    w = Array.from(Array(vec.length), () => 0.0);
    sumTX = Array.from(Array(vec.length), () => 0.0);
    averageTX = Array.from(Array(vec.length), () => 0.0);
  }

  layer1tx = [];
  layer22tx = [];
  layer3tx = [];
  layer3vec = [];

  var fraud = fraudd(tx);

  for (let i = 0; i < vec.length; i++) {
    vecMinusW.push(vec[i] - w[i]);
    sumTX[i] += vec[i];
    averageTX[i] = sumTX[i] / layer0count;
  }
  //console.log(averageTX);

  norm = l2norm(vecMinusW);

  layer0count++;
  generateOutput0(tx);

  if (norm >= threshold) {
    alarm = 1;
    numFlagTx++;
    layer1count++;

    //console.log(norm);

    layer1tx = tx;

    generateOutput1(layer1tx);
    generateOutput2(layer1tx);
    generateOutput3(layer1tx, vec);

    //layer2tx = layer1tx;
    //layer3vec = vec;
  }
  adminstration(fraud, alarm, tx, norm, vecMinusW, w);
  alarm = 0;

  arrayOfNorm(norm, x_axis);

  return tx;
};

export {
  fado,
  fadoN,
  layer0count,
  numFlagTx,
  layer1count,
  averageTX,
  w,
  setThreshold,
  threshold,
  x_axis,
};
