<<<<<<< HEAD
//import { useSelector, useDispatch } from "react-redux";

import { generateTx } from "./generate_txt.js";
const allCountries = [
  "DE",
  "BE",
  "AT",
  "FR",
  "EE",
  "ES",
  "IT",
  "LT",
  "NL",
  "CZ",
  "BG",
  "EL",
  "HR",
  "CY",
  "DK",
  "IE",
  "HU",
  "LV",
  "LU",
  "MT",
];

const tx2vec = () => {
  //const data = useSelector((state) => state.configs);
  var allAtr = generateTx();
  var txsLine = allAtr[0];
  var sCountry = allAtr[2];
  var rCountry = allAtr[3];
  var amountt = Math.floor(allAtr[1]);
  var vector = Array.from(Array(45), () => 0);
  var pics = [0, 0, 0];
  var j = 20;
  var amounttt = 0;
=======
import store from "../../../../redux/store";

const tx2vec = (transaction) => {
  const state = store.getState();
  var txsLine = transaction;
  //var tx = txsLine.split(",");
  var tx = txsLine;
>>>>>>> configs-automation

  var toVec = state.configs.configs.txToVec.features;
  var txFeaturesOptions = state.configs.configs.tx.options;
  var txFeatures = state.configs.configs.tx.features;
  var encoding = state.configs.configs.txToVec.encoding;
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
