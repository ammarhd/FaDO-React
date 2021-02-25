import store from "../../../../../redux/store";

// test veriables
var na = 0;
var nf = 0;
var tvalue = 0;
var fvalue = 0;
var tp = 0;
var fp = 0;
var tn = 0;
var fn = 0;

var checkLabel = false;
var checkAmount = false;
var indexAmount;
var indexLabel;

export const checkConfigration = () => {
  const state = store.getState();
  var txFeatures = state.configs.configs.tx.features;
  var lowCaseFeatures = txFeatures.map((feature) => feature.toLowerCase());
  if (lowCaseFeatures.includes("amount")) {
    indexAmount = lowCaseFeatures.indexOf("amount");
    checkAmount = true;
  } else {
    checkAmount = false;
  }

  if (lowCaseFeatures.includes("label")) {
    indexLabel = lowCaseFeatures.indexOf("label");
    checkLabel = true;
  } else {
    checkLabel = false;
  }

  //check if there is kpi
  var config = state.configs.configs;
  //var config = config.map((item) => item.toLowerCase());
  if (config.hasOwnProperty("kpi")) {
    na = config.kpi.na;
    nf = config.kpi.nf;
    tvalue = config.kpi.tvalue;
    fvalue = config.kpi.fvalue;
    tp = config.kpi.tp;
    fp = config.kpi.fp;
    tn = config.kpi.tn;
    fn = config.kpi.fn;
  }

  console.log("bu");
};

export const adminstration = (alarm, transaction) => {
  //var tx = transaction.split(",");
  var tx = transaction;

  if (alarm === 1) {
    na += 1;
  }

  if (checkLabel) {
    var label = parseInt(tx[indexLabel]);
    if (label === 1) {
      if (checkAmount) {
        fvalue += Math.floor(tx[indexAmount]);
      } else {
        fvalue = "Not Available";
      }
      nf += 1;
    }
    if (alarm === 1 && label === 1) {
      if (checkAmount) {
        tvalue += Math.floor(tx[indexAmount]);
      } else {
        tvalue = "Not Available";
      }
      tp += 1;
    } else if (alarm !== 1 && label === 1) {
      fn += 1;
    } else if (alarm === 1 && label !== 1) {
      fp += 1;
    } else {
      tn += 1;
    }
  }
};

export { na, nf, tvalue, fvalue, tp, fp, tn, fn };

//var gamma = 1 / Math.sqrt(fp);
//for (let i = 0; i < w.length; i++) {
//  v_t.push(vecMinusW[i] / norm);
//  v_t[i] *= gamma;
//  w_new.push(w[i] + v_t[i]);
//}
//
//w = w_new;
