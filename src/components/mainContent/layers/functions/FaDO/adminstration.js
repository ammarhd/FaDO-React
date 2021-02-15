// test veriables

var na = 0;
var nf = 0;
var tvalue = 0;
var fvalue = 0;
var tp = 0;
var fp = 0;
var tn = 0;
var fn = 0;

const adminstration = (fraud, alarm, transaction, norm, vecMinusW, w) => {
  var v_t = [];
  var w_new = [];
  //var tx = transaction.split(",");
  var tx = transaction;

  if (alarm === 1) {
    na += 1;
  }
  if (fraud === 1) {
    nf += 1;
    fvalue += Math.floor(tx[2]);
  }
  if (alarm === 1 && fraud === 1) {
    tvalue += Math.floor(tx[2]);
    tp += 1;
  } else if (alarm !== 1 && fraud === 1) {
    fn += 1;
  } else if (alarm === 1 && fraud !== 1) {
    fp += 1;
    var gamma = 1 / Math.sqrt(fp);
    for (let i = 0; i < w.length; i++) {
      v_t.push(vecMinusW[i] / norm);
      v_t[i] *= gamma;
      w_new.push(w[i] + v_t[i]);
    }

    w = w_new;
  } else {
    tn += 1;
  }
};

export { adminstration, na, nf, tvalue, fvalue, tp, fp, tn, fn };
