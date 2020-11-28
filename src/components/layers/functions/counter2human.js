import { txsCount1, txsCount2, txsCount3, txsCount4 } from "./generateOutputs";

const counter0 = () => {
  var count1 = 0;
  var count11 = txsCount1 / 10;
  setInterval(() => {
    count1 = txsCount1 - count11;
    count11 = txsCount1;
    if (count1 > 140) {
      var layer0count = "Processed" + " " + count1 / 10 + " " + "TXs/sec";
    } else if (count1 > 10) {
      layer0count = "Processed" + " " + count1 * 6 + " " + "TXs/min";
    } else {
      layer0count = "Processed" + " " + count1 * 36 + " " + "TXs/hour";
    }
    document.getElementById("tx0").innerHTML = layer0count;
  }, 10000);
};

const counter1 = () => {
  var count2 = 0;
  var count22 = txsCount2 / 20;
  setInterval(() => {
    count2 = txsCount2 - count22;
    count22 = txsCount2;
    if (count2 > 140) {
      var layer1count = "Processed" + " " + count2 / 20 + " " + "TXs/sec";
    } else if (count2 > 10) {
      layer1count = "Processed" + " " + count2 * 3 + " " + "TXs/min";
    } else {
      layer1count = "Processed" + " " + count2 * 18 + " " + "TXs/hour";
    }
    document.getElementById("tx1").innerHTML = layer1count;
  }, 20000);
};

const counter2 = () => {
  var count3 = 0;
  var count33 = txsCount3 / 20;
  setInterval(() => {
    count3 = txsCount3 - count33;
    count33 = txsCount3;
    if (count3 > 140) {
      var layer2count = "Processed" + " " + count3 / 20 + " " + "TXs/sec";
    } else if (count3 > 10) {
      layer2count = "Processed" + " " + count3 * 3 + " " + "TXs/min";
    } else {
      layer2count = "Processed" + " " + count3 * 18 + " " + "TXs/hour";
    }
    document.getElementById("tx2").innerHTML = layer2count;
  }, 20000);
};

const counter3 = () => {
  var count4 = 0;
  var count44 = txsCount4 / 20;
  setInterval(() => {
    count4 = txsCount4 - count44;
    count44 = txsCount4;
    if (count4 > 140) {
      var layer3count = "Processed" + " " + count4 / 20 + " " + "TXs/sec";
    } else if (count4 > 10) {
      layer3count = "Processed" + " " + count4 * 3 + " " + "TXs/min";
    } else if (count4 > 0) {
      layer3count = "Processed" + " " + count4 * 18 + " " + "TXs/hour";
    } else {
      layer3count = "Processed" + " " + 18 + " " + "TXs/3hours";
    }
    document.getElementById("tx3").innerHTML = layer3count;
  }, 20000);
};

export { counter0, counter1, counter2, counter3 };
