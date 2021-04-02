import store from "../../../../../redux/store";

const tx2vec = (transaction) => {
  const state = store.getState();
  var txsLine = transaction;
  //var tx = txsLine.split(",");
  var tx = txsLine;

  var toVec = state.configs.configs.txToVec.features;
  var txFeaturesOptions = state.configs.configs.tx.options;
  var txFeatures = state.configs.configs.tx.features;
  var encoding = state.configs.configs.txToVec.encoding;
  var vec = [];

  for (let i = 0; i < toVec.length; i++) {
    var index = txFeatures.indexOf(toVec[i]);
    //console.log(tx[index]);
    var length = txFeaturesOptions[toVec[i]].length;
    //console.log(length);
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
  }

  return vec;
};
export { tx2vec };
