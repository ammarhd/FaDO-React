import Data from "../Customers.json";

const randomItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};
const keys = (obj) => {
  const result = [];
  for (const property in obj) {
    result.push(obj[property]);
  }
  return result;
};

const generateTx = () => {
  var weighted = require("weighted");
  var randomNormal = require("random-normal");
  var abs = require("math-abs");
  let sendersIndex = [];
  let receiversIndex = [];
  let l = Data.length;
  let items = [];
  let sender = 0;
  let receiver = 0;

  let international = weighted.select([0, 1], [0.98, 0.02]);
  if (international === 1) {
    let senderCountryCd = weighted.select(["LV", "BE", "any"], [0.5, 0.4, 0.1]);
    if (senderCountryCd === "any") {
      for (let i = 0; i < l; i++) {
        if ((Data[i].Country !== "LV") & (Data[i].Country !== "BE")) {
          sendersIndex.push(i);
        }
      }
      items = sendersIndex;
      sender = randomItem(items);
      for (let i = 0; i < l; i++) {
        if (Data[i] !== sender) {
          receiversIndex.push(i);
        }
      }
      items = receiversIndex;
      receiver = randomItem(items);
    } else {
      for (let i = 0; i < l; i++) {
        if (Data[i].Country === senderCountryCd) {
          sendersIndex.push(i);
        } else {
          if ((senderCountryCd === "LV") & (Data[i].Country === "DE")) {
            receiversIndex.push(i);
          } else if ((senderCountryCd === "BE") & (Data[i].Country === "IT")) {
            receiversIndex.push(i);
          }
        }
      }
      items = sendersIndex;
      sender = randomItem(items);
      items = receiversIndex;
      receiver = randomItem(items);
    }
  } else {
    for (let i = 0; i < l; i++) {
      sendersIndex.push(i);
    }
    items = sendersIndex;
    sender = randomItem(items);
    for (let i = 0; i < l; i++) {
      if (Data[i].Country === Data[sender].Country) {
        receiversIndex.push(i);
      }
    }
    items = receiversIndex;
    receiver = randomItem(items);
  }
  let mean = weighted.select(
    [100, 500, 1000, 5000, 20000, 50000, 100000],
    [0.5, 0.2, 0.15, 0.05, 0.05, 0.025, 0.025]
  );
  let std = mean * 0.5;
  let amount = abs(randomNormal({ mean, std }));

  let senderInfo = keys(Data[sender]);
  let receiverInfo = keys(Data[receiver]);

  let line = [sender, receiver, amount] + "," + senderInfo + "," + receiverInfo;

  return [line, amount, senderInfo[0], receiverInfo[0]];
};
export { generateTx };
