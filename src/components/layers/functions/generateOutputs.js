import { fado, layer1tx } from "./FaDO.js";
import { setConfig } from "./txConfig.js";
import { setConfig2 } from "./txConfig2.js";
import { printOutput, printOutput4 } from "./printOutputs.js";
import { printPics1, printPics4 } from "./printPics.js";

var wholeData = [];
var raws = [
  "SenderID",
  "ReceiverID",
  "Amount",
  "SenderCountry",
  "SenderTypeOfPerson",
  "SenderAgeGroup",
  "SenderPoliticallyExposed",
  "SenderHasChildren",
  "SenderIsEmployed",
  "ReceiverCountry",
  "ReceiverTypeOfPerson",
  "ReceiverAgeGroup",
  "ReceiverPoliticallyExposed",
  "ReceiverHasChildren",
  "ReceiverIsEmployed",
];
wholeData.push(raws);

var txsCount1 = 0;
var txsCount2 = 0;
var txsCount3 = 0;
var txsCount4 = 0;

var layer1Iteration = 0;
var layer2Iteration = 0;
var layer3Iteration = 0;

var layer3txArray = [];
var pics3Array = [];
var layer3vecArray = [];

var ii = 0;
var f = 0;
var n = 0;
var label = "";
var rand;

var start = new Date().getTime();
var end = 0;
var time = 0;
var minutes = 0;
var minute2 = 0;
var seconds = 0;
var second2 = 0;
var i = 0;

var data = [];

/*
const generateOutput = () => {
  let newOutput = fado();
  printPics1(newOutput, pics0, "inflowLayer1");
  txsCount1++;
};

const generateOutput2 = () => {
  if (layer1Iteration < layer1tx.length) {
    printPics1(
      layer1tx[layer1Iteration],
      pics1[layer1Iteration],
      "outflowLayer2"
    );
    layer1Iteration++;
    txsCount2++;
  }
};
*/

const generateOutput = () => {
  let newOutput = fado();
  printOutput(newOutput, "inflowLayer1");
  txsCount1++;
  //raws = [];
  //raws.push(newOutput);
  //
  //wholeData.push(raws);
  //
  //if (txsCount1 === 1000000) {
  //  var arrayContent = [["Séjour 1, é,í,ú,ü,ű"], ["Séjour 2, é,í,ú,ü,ű"]];
  //  var csvContent = wholeData.join("\n");
  //  var link = window.document.createElement("a");
  //  link.setAttribute(
  //    "href",
  //    "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURI(csvContent)
  //  );
  //  link.setAttribute("download", "./data.csv");
  //  link.click();
  //}
};

const generateOutput2 = () => {
  if (layer1tx.length > 0) {
    printOutput(layer1tx, "outflowLayer2");
    txsCount2++;
  }
};

const generateOutput3 = () => {
  var config = setConfig();
  var config1 = config[0];
  var config2 = config[1];
  if (config1.length > 0) {
    printPics1(config1, config2, "outflowLayer3");

    txsCount3++;
  }
  /*
  if (layer3tx.length > 0) {
    layer3txArray.push(layer3tx);
    pics3Array.push(pics3);
    layer3vecArray.push(layer3vec);
  }
  */
};

const generateOutput4 = () => {
  var configg = setConfig2();
  var configg1 = configg[0];
  var configg2 = configg[1];
  var configg3 = configg[2];
  if (configg1.length > 0) {
    printPics4(configg1, configg2, configg3, "outflowLayer4");

    txsCount4++;
    /*
    layer3txArray.shift();
    pics3Array.shift();
    layer3vecArray.shift();
    */
  }
};

const randomLabels = () => {
  rand = Math.random();
  if (rand < 0.001) {
    label = "F";
    f++;
  } else {
    label = "N";
    n++;
  }
  ii++;

  var l1 = ii + " TXs: (" + label + ") " + rand;
  var l2 = "frauds= " + f + " ( " + (f / ii) * 100 + " %" + " ) ";
  var l3 = "normals= " + n + " ( " + (n / ii) * 100 + " %" + " ) ";
  setTimeout(function () {
    end = new Date().getTime();
    time = end - start;
    minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.floor((time % (1000 * 60)) / 1000);
  }, 1000);

  if (second2 === seconds) {
    var obj = {
      id: i,
      F: (f / ii) * 100,
    };

    i++;
    data.push(obj);

    second2 = seconds + 15;
    if (second2 == 60) {
      second2 = 0;
    }
  }
};

/*
const generateOutput3 = () => {
  if (layer2tx.length > 0) {
    printOutput(layer2tx, "outflowLayer3");

    txsCount3++;
  }
  if (layer3tx.length > 0) {
    layer3txArray.push(layer3tx);
    layer3vecArray.push(layer3vec);
  }
};

const generateOutput4 = () => {
  if (layer3txArray.length > 0) {
    printOutput4(layer3txArray[0], layer3vecArray[0], "outflowLayer4");
    txsCount4++;
    layer3txArray.shift();
    layer3vecArray.shift();
  }
};
*/

export {
  generateOutput,
  generateOutput2,
  generateOutput3,
  generateOutput4,
  txsCount1,
  txsCount2,
  txsCount3,
  txsCount4,
  ii,
  f,
  n,
  label,
  rand,
  time,
  minutes,
  seconds,
};
