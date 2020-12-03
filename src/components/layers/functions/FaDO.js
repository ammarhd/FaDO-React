import { tx2vec } from "./tex2vec.js";

var w = Array.from(Array(45), () => 0.0);
var l0 = 0;
var layer1tx = [];
var layer2tx = [];
var layer3tx = [];
var layer3vec = [];
var m_t = 0;
var norm = 0;
var y_vec = [];
var averageTX = Array.from(Array(45), () => 0.0);

var normArray = Array.from(Array(10), () => 0.0);
var normArrayToDisplay = [];
var countNorm = 0;
var layer1count = 0;
var layer2count = 0;
var layer3count = 0;

var pics0 = [];
var pics1 = [];
var pics2 = [];
var pics3 = [];

var amount = 0;
var senderInfo = [];
var receiverInfo = [];

const fadoN = (normalVec) => {
  var l2norm = require("compute-l2norm");
  var y_vecN = normalVec;
  var vecMinusW = [];
  var v_t = [];
  var gamma = 0;
  var w_new = [];

  for (let i = 0; i < 45; i++) {
    vecMinusW.push(y_vecN[i] - w[i]);
  }
  norm = l2norm(vecMinusW);
  //gamma = 1 / Math.sqrt(m_t);
  gamma = 0.1;
  for (let i = 0; i < 45; i++) {
    v_t.push(vecMinusW[i] / norm);
    v_t[i] *= gamma;
    w_new.push(w[i] + v_t[i]);
  }

  w = w_new;
};

const fado = () => {
  var l2norm = require("compute-l2norm");
  var allAtr = tx2vec();
  var tx = allAtr[0];
  y_vec = allAtr[1];
  pics0 = allAtr[2];
  var amountt = allAtr[3];
  var senderInfoo = allAtr[4];
  var receiverInfoo = allAtr[5];
  var vecMinusW = [];
  var v_t = [];
  var gamma = 0;
  var w_new = [];

  layer1tx = [];
  layer2tx = [];
  layer3tx = [];
  pics1 = [];
  pics2 = [];
  pics3 = [];
  layer3vec = [];
  amount = 0;
  senderInfo = [];
  receiverInfo = [];

  for (let i = 0; i < 45; i++) {
    vecMinusW.push(y_vec[i] - w[i]);
    averageTX[i] += y_vec[i];
  }
  norm = l2norm(vecMinusW);
  if (norm >= 1.65) {
    m_t++;

    layer1tx = tx;
    pics1 = pics0;
    
    amount = amountt;
    senderInfo = senderInfoo;
    receiverInfo = receiverInfoo;

    layer1count++;

    
      
      
    layer3vec = y_vec;
      
    
  }
  l0++;
  countNorm++;

  if (norm <= 0.57) {
    normArray[0] += 1;
  } else if (norm <= 1.58) {
    normArray[1] += 1;
  } else if (norm <= 1.59) {
    normArray[2] += 1;
  } else if (norm <= 1.6) {
    normArray[3] += 1;
  } else if (norm <= 1.61) {
    normArray[4] += 1;
  } else if (norm <= 1.62) {
    normArray[5] += 1;
  } else if (norm <= 1.63) {
    normArray[6] += 1;
  } else if (norm <= 1.64) {
    normArray[7] += 1;
  } else if (norm <= 1.65) {
    normArray[8] += 1;
  } else if (norm <= 1.66) {
    normArray[9] += 1;
  } else {
    normArray[10] += 1;
  }
  if (countNorm == 1000) {
    normArrayToDisplay = normArray;
    normArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    countNorm = 0;
  }

  /*
    console.log(vecMinusW);
    console.log(w);
    console.log(norm);
    console.log(m_t);
    console.log(l0);
    console.log(m_t / l0);
    */
  //console.log(layer3tx);

  return tx;
};

export {
  fado,
  fadoN,
  w,
  averageTX,
  y_vec,
  l0,
  m_t,
  normArrayToDisplay,
  layer1tx,
  layer2tx,
  layer3tx,
  layer3vec,
  layer1count,
  layer2count,
  layer3count,
  pics0,
  pics1,
  pics2,
  pics3,
  amount,
  senderInfo,
  receiverInfo,
};
