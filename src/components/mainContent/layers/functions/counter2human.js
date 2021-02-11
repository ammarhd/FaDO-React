import { txsCount0 } from "./outputs";

var l0c;
const counter0 = (txsCount0) => {
  var count1 = 0;
  var count11 = txsCount0 / 10;

  count1 = txsCount0 - count11;
  count11 = txsCount0;
  if (count1 > 140) {
    var num = count1 / 10;
    var num2 = num.toFixed(2);
    var layer0count = ["Processed" + " " + num2 + " " + "TXs/sec"];
    l0c = [num2 + " " + "TXs/sec"];
  } else if (count1 > 10) {
    num = count1 * 6;
    num2 = num.toFixed(2);
    layer0count = ["Processed" + " " + num2 + " " + "TXs/min"];
    l0c = [num2 + " " + "TXs/min"];
  } else {
    num = count1 * 36;
    num2 = num.toFixed(2);
    layer0count = ["Processed" + " " + num2 + " " + "TXs/hour"];
    l0c = [num2 + " " + "TXs/hour"];
  }

  document.getElementById("tx0").innerHTML = layer0count;
};

const counter1 = (txsCount1) => {
  var count2 = 0;
  var count22 = txsCount1 / 20;
  setInterval(() => {
    count2 = txsCount1 - count22;
    count22 = txsCount1;
    if (count2 > 140) {
      var num = count2 / 20;
      var num2 = num.toFixed(2);
      var layer1count = ["Processed" + " " + num2 + " " + "TXs/sec"];
    } else if (count2 > 10) {
      num = count2 * 3;
      num2 = num.toFixed(2);
      layer1count = ["Processed" + " " + num2 + " " + "TXs/min"];
    } else {
      num = count2 * 18;
      num2 = num.toFixed(2);
      layer1count = ["Processed" + " " + num2 + " " + "TXs/hour"];
    }
    document.getElementById("tx1").innerHTML = layer1count;
  }, 20000);
};

const counter2 = (txsCount2) => {
  var count3 = 0;
  var count33 = txsCount2 / 20;
  setInterval(() => {
    count3 = txsCount2 - count33;
    count33 = txsCount2;
    if (count3 > 140) {
      var num = count3 / 20;
      var num2 = num.toFixed(2);
      var layer2count = ["Processed" + " " + num2 + " " + "TXs/sec"];
    } else if (count3 > 10) {
      num = count3 * 3;
      num2 = num.toFixed(2);
      layer2count = ["Processed" + " " + num2 + " " + "TXs/min"];
    } else if (count3 > 0) {
      num = count3 * 18;
      num2 = num.toFixed(2);
      layer2count = ["Processed" + " " + num2 + " " + "TXs/hour"];
    } else {
      layer2count = ["Processed" + " " + 18 + " " + "TXs/3hours"];
    }
    document.getElementById("tx2").innerHTML = layer2count;
  }, 20000);
};

const counter3 = (txsCount3) => {
  var count4 = 0;
  var count44 = txsCount3 / 20;
  setInterval(() => {
    count4 = txsCount3 - count44;
    count44 = txsCount3;
    if (count4 > 140) {
      var num = count4 / 20;
      var num2 = num.toFixed(2);
      var layer3count = ["Processed" + " " + num2 + " " + "TXs/sec"];
    } else if (count4 > 10) {
      num = count4 * 3;
      num2 = num.toFixed(2);
      layer3count = ["Processed" + " " + num2 + " " + "TXs/min"];
    } else if (count4 > 0) {
      num = count4 * 18;
      num2 = num.toFixed(2);
      layer3count = ["Processed" + " " + num2 + " " + "TXs/hour"];
    } else {
      layer3count = ["Processed" + " " + 18 + " " + "TXs/3hours"];
    }
    document.getElementById("tx3").innerHTML = layer3count;
  }, 20000);
};

const cEfficiency = () => {
  var count1 = 0;
  var count11 = txsCount0 / 10;
  setInterval(() => {
    count1 = txsCount0 - count11;
    count11 = txsCount0;
    if (count1 > 140) {
      var num = count1 / 10;
      var num2 = num.toFixed(2);
      var layer0count = ["Processed" + " " + num2 + " " + "TXs/sec"];
    } else if (count1 > 10) {
      num = count1 * 6;
      num2 = num.toFixed(2);
      layer0count = ["Processed" + " " + num2 + " " + "TXs/min"];
    } else {
      num = count1 * 36;
      num2 = num.toFixed(2);
      layer0count = ["Processed" + " " + num2 + " " + "TXs/hour"];
    }
    l0c = layer0count;
    document.getElementById("tx0").innerHTML = layer0count;
  }, 10000);
};

export { counter0, counter1, counter2, counter3, l0c };
