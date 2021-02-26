import store from "../../../../../redux/store";
import {
  w,
  sumTX,
  averageTX,
  layer0count,
  layer1count,
  threshold_final,
  gamma_final,
} from "../FaDO";
import { na, nf, tvalue, fvalue, tp, fp, tn, fn } from "../FaDO/adminstration";
import { txsCount0, txsCount1, txsCount2, txsCount3 } from "../outputs";

export const export_config = async () => {
  const state = store.getState();
  var config = state.configs.configs;
  var newObj = Object.assign({}, config);
  newObj.inititial_value = w;
  newObj.kpi = {
    na: na,
    nf: nf,
    tvalue: tvalue,
    fvalue: fvalue,
    tp: tp,
    fp: fp,
    tn: tn,
    fn: fn,
    sumTx: sumTX,
    averageTX: averageTX,
    layer0count: layer0count,
    layer1count: layer1count,
    threshold_final: threshold_final,
    gamma_final: gamma_final,
    txsCount0: txsCount0,
    txsCount1: txsCount1,
    txsCount2: txsCount2,
    txsCount3: txsCount3,
  };

  const fileName = "file";
  const json = JSON.stringify(newObj);
  const blob = new Blob([json], { type: "application/json" });
  const href = await URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = href;
  link.download = fileName + ".json";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  console.log(newObj);
};

//if (ii === 40) {
//  var array = [];
//  array.push(newObj);
//  var arrayContent = [["Séjour 1, é,í,ú,ü,ű"], ["Séjour 2, é,í,ú,ü,ű"]];
//  var csvContent = newObj;
//  var link = window.document.createElement("a");
//  link.setAttribute(
//    "href",
//    "data:text/json;charset=utf-8,%EF%BB%BF" + encodeURI(csvContent)
//  );
//  link.setAttribute("download", "./data.json");
//  link.click();
//}
