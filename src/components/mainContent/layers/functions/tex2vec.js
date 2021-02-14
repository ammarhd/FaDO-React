import store from "../../../../store";

const tx2vec = (transaction) => {
  const state = store.getState();
  var txsLine = transaction;
  //var tx = txsLine.split(",");
  var tx = txsLine;
  console.log(tx);

  var toVec = state.configSlice.configs.txToVec.features;
  var txFeaturesOptions = state.configSlice.configs.tx.options;
  var txFeatures = state.configSlice.configs.tx.features;
  var encoding = state.configSlice.configs.txToVec.encoding;
  var vec = [];

  for (let i = 0; i < toVec.length; i++) {
    var index = txFeatures.indexOf(toVec[i]);
    //console.log(tx[index]);
    var length = txFeaturesOptions[toVec[i]].length;
    var options = txFeaturesOptions[toVec[i]];
    var vecs = Array.from(Array(length), () => 0);
    if (encoding[i] == "fixed") {
      for (let i = 0; i < length; i++) {
        if (tx[index] == options[i]) {
          vecs[i] = 1;
        }
      }
    } else {
      var floor = Math.floor(tx[index]);
      for (let i = 0; i < length; i++) {
        if (floor >= options[i]) {
          vecs[length - i - 1] = 1;
          break;
        }
      }
    }

    vec = vec.concat(vecs);

    //console.log(txFeaturesOptions[toVec[i]]);
  }

  //console.log(toVec.length);
  //console.log(txFeatures);

  return vec;
};
export { tx2vec };
