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

  for (let i = 0; i < 20; i++) {
    if (sCountry[0] === allCountries[i]) {
      vector[i] = 1;
      var flag1 = i;
    }
    if (rCountry[0] === allCountries[i]) {
      vector[j] = 1;
      var flag2 = i;
    }
    j++;
  }
  pics[0] = flag1;
  pics[1] = flag2;

  if (amountt < 101) {
    vector[40] = 1;
    amounttt = 1;
    var txColor = "#ffffff";
  } else if ((amountt > 100) & (amountt < 1001)) {
    vector[41] = 1;
    amounttt = 2;
    txColor = "#e7e7e7";
  } else if ((amountt > 1000) & (amountt < 10001)) {
    vector[42] = 1;
    amounttt = 3;
    txColor = "#a0a0a0";
  } else if ((amountt > 10000) & (amountt < 100001)) {
    vector[43] = 1;
    amounttt = 4;
    txColor = "#5b5b5b";
  } else if (amountt > 100000) {
    vector[44] = 1;
    amounttt = 5;
    txColor = "#000000";
  }
  pics[2] = txColor;

  return [txsLine, vector, pics, amounttt, sCountry, rCountry];
};
export { tx2vec };
