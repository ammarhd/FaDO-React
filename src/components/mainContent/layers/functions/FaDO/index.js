import fraudd from "./fraud.js";
import { adminstration, fp } from "./adminstration.js";
import { arrayOfNorm } from "./arrayOfNorm.js";
import {
  generateOutput0,
  generateOutput1,
  generateOutput2,
  generateOutput3,
} from "../outputs";
import store from "../../../../../redux/store";

var gamma = 1;
var gamma_final = 1;

var w = [];
var sumTX = [];
var averageTX = [];

var threshold = 1;
var threshold_final = 1;
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
var x_axis2 = [0, 0.76, 0.79, 0.82, 0.85, 0.88, 0.91, 0.94, 0.97, 1, 1.03, 3];

export const setThreshold = (num) => {
  threshold = num;
  threshold_final = threshold.toFixed(2);

  var ratio = 0.24;
  for (let i = 1; i < 12; i++) {
    x_axis[i] = threshold - ratio;
    ratio = ratio - 0.03;
    var num2 = x_axis[i];
    x_axis2[i] = num2.toFixed(2);
  }
};

export const setThreshold_input = (num) => {
  threshold_final = num;

  var ratio = 0.24;
  for (let i = 1; i < 12; i++) {
    x_axis[i] = threshold_final - ratio;
    ratio = ratio - 0.03;
    var num2 = x_axis[i];
    x_axis2[i] = num2.toFixed(2);
  }
};

////// gamma
export const setGammaValue = (num) => {
  gamma = num;
  gamma_final = gamma.toFixed(3);
};
export const setGammaValue_input = (num) => {
  gamma_final = num;
};

/// check inititial value from the configs

export const check_inititial_value = (vec_length) => {
  const state = store.getState();
  var check_model = state.configs.configs;

  if (check_model.hasOwnProperty("inititial_value")) {
    w = state.configs.configs.inititial_value;
  } else {
    w = Array.from(Array(vec_length.length), () => 0.0);
  }
  sumTX = Array.from(Array(vec_length.length), () => 0.0);
  averageTX = Array.from(Array(vec_length.length), () => 0.0);

  //check if there is kpi
  var config = state.configs.configs;
  //var config = config.map((item) => item.toLowerCase());
  if (config.hasOwnProperty("kpi")) {
    //sumTX = config.kpi.sumTX;
    //averageTX = config.kpi.averageTX;
    layer0count = config.kpi.layer0count;
    layer1count = config.kpi.layer1count;
    threshold_final = config.kpi.threshold_final;
    gamma_final = config.kpi.gamma_final;
  } else {
    //sumTX = Array.from(Array(vec_length.length), () => 0.0);
    //averageTX = Array.from(Array(vec_length.length), () => 0.0);
    layer0count = 0;
    layer1count = 0;
    threshold_final = 1;
    gamma_final = 1;
  }
};

//////////

export const fadoN = (normalVec) => {
  var l2norm = require("compute-l2norm");
  var y_vecN = normalVec;
  var vecMinusW = [];
  var v_t = [];
  var w_new = [];

  for (let i = 0; i < y_vecN.length; i++) {
    vecMinusW.push(y_vecN[i] - w[i]);
  }
  norm = l2norm(vecMinusW);
  //gamma = 1 / Math.sqrt(m_t);

  for (let i = 0; i < y_vecN.length; i++) {
    var gamma_t = gamma_final / Math.sqrt(fp);
    v_t.push(vecMinusW[i] / norm);
    v_t[i] *= gamma_t;
    w_new.push(w[i] + v_t[i]);
  }

  w = w_new;
};

export const fado = (transaction, vector) => {
  var l2norm = require("compute-l2norm");

  var tx = transaction;
  var vec = vector;
  var vecMinusW = [];

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

  if (norm >= threshold_final) {
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
  adminstration(alarm, tx);
  alarm = 0;

  arrayOfNorm(norm, x_axis2);

  return tx;
};

export {
  layer0count,
  numFlagTx,
  layer1count,
  sumTX,
  averageTX,
  w,
  threshold_final,
  x_axis2,
  gamma_final,
};
