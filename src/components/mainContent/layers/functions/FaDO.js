import { tx2vec } from "./tex2vec.js";

var w = Array.from(Array(45), () => 0.0);
var l0 = 0;
var layer1tx = [];
var layer22tx = [];
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

// test veriables

var na = 0;
var nf = 0;
var tvalue = 0;
var fvalue = 0;
var tp = 0;
var fp = 0;
var tn = 0;
var fn = 0;
var alarm = 0;

const fraudd = (tx) => {
  var fraud = 0;
  var weighted = require("weighted");
  var txx = tx.split(",");
  if (txx[3] === "IT" || txx[9] === "IT") {
    fraud = weighted.select([1, 0], [0.01, 0.99]);
    return fraud;
  } else {
    fraud = weighted.select([1, 0], [0.001, 0.999]);
    return fraud;
  }
};

const adminstration = (fraud, alarm, tx, norm, vecMinusW) => {
  var v_t = [];
  var w_new = [];
  var txxx = tx.split(",");
  if (alarm === 1) {
    na += 1;
  }
  if (fraud === 1) {
    nf += 1;
    fvalue += Math.floor(txxx[2]);
  }
  if (alarm === 1 && fraud === 1) {
    tvalue += Math.floor(txxx[2]);
    tp += 1;
  } else if (alarm !== 1 && fraud === 1) {
    fn += 1;
  } else if (alarm === 1 && fraud !== 1) {
    fp += 1;
    var gamma = 1 / Math.sqrt(fp);
    for (let i = 0; i < 45; i++) {
      v_t.push(vecMinusW[i] / norm);
      v_t[i] *= gamma;
      w_new.push(w[i] + v_t[i]);
    }

    w = w_new;
  } else {
    tn += 1;
  }
};

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
  layer22tx = [];
  layer3tx = [];
  pics1 = [];
  pics2 = [];
  pics3 = [];
  layer3vec = [];
  amount = 0;
  senderInfo = [];
  receiverInfo = [];

  var fraud = fraudd(tx);

  for (let i = 0; i < 45; i++) {
    vecMinusW.push(y_vec[i] - w[i]);
    averageTX[i] += y_vec[i];
  }
  norm = l2norm(vecMinusW);

  if (norm >= 1.4) {
    alarm = 1;
    m_t++;

    amount = amountt;
    layer1tx = tx;
    pics1 = pics0;
    layer22tx = layer1tx;

    senderInfo = senderInfoo;
    receiverInfo = receiverInfoo;

    layer1count++;

    layer3vec = y_vec;
  }
  adminstration(fraud, alarm, tx, norm, vecMinusW);
  alarm = 0;
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
  layer22tx,
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
  na,
  nf,
  tvalue,
  fvalue,
  tp,
  fp,
  tn,
  fn,
};
