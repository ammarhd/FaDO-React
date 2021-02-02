import { setConfig } from "./txConfig.js";

var configsArray2 = [];
//configsArray2[10] = { value: "0" };
//configsArray2[11] = { value: "0" };
var layer3count = 0;

var allArray = [];
var layer3tx = [];
var pic3 = [];
var vec3 = [];
var info3 = [];

const recieveCall2 = (configrations2) => {
  configsArray2 = configrations2;
};

const setConfig2 = () => {
  allArray = setConfig();
  layer3tx = allArray[0];
  pic3 = allArray[1];
  vec3 = allArray[2];
  info3 = allArray[3];

  if (layer3tx.length === 0) {
    return [layer3tx, pic3, vec3];
  } else {
    if (configsArray2.length == 0) {
      layer3count++;
      return [layer3tx, pic3, vec3];
    } else {
      for (let i = 0; i < 13; i++) {
        if (configsArray2[i] != null && configsArray2[i] !== "") {
          if (configsArray2[i].value != info3[i]) {
            layer3tx = [];
            pic3 = [];
            vec3 = [];
            return [layer3tx, pic3, vec3];
          }
        }
      }
    }
  }
  layer3count++;
  return [layer3tx, pic3, vec3];
};

export { setConfig2, recieveCall2, layer3count };
