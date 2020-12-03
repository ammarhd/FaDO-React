import {
  layer1tx,
  layer3vec,
  pics0,
  amount,
  senderInfo,
  receiverInfo,
} from "./FaDO.js";

var layer2tx = layer1tx;
var pic2 = pics0;

var configsArray = [];
var layer2count = 0;
var info = [];

const recieveCall = (configrations) => {
  configsArray = configrations;
  console.log(configsArray);
};

const setConfig = () => {
  layer2tx = layer1tx;
  pic2 = pics0;
  var vecLayer3 = layer3vec;
  info = [];
  for (let j = 0; j < 6; j++) {
    info.push(senderInfo[j]);
    info.push(receiverInfo[j]);
  }
  info.push(amount);
  if (configsArray.length === 0) {
    layer2tx = layer1tx;
    pic2 = pics0;
    vecLayer3 = layer3vec;
  } else {
    for (let i = 0; i < 13; i++) {
      if (configsArray[i] != null && configsArray[i] !== "") {
        if (configsArray[i].value != info[i]) {
          layer2tx = [];
          pic2 = [];
          vecLayer3 = [];
          return [layer2tx, pic2, vecLayer3, info];
        }
      }
    }
  }
  layer2count++;
  return [layer2tx, pic2, vecLayer3, info];
};

export { setConfig, recieveCall, layer2count };
