import store from "../../../../../redux/store";
import { tx_visual } from "./tx_visual";

// to visualize one txs in help/tx visualization
var once = true;
var tx_to_visualize = document.createElement("div");

var i;

const printPics1 = (token, containerId) => {
  const state = store.getState();

  var txFeatures = state.configs.configs.tx.features;
  var txFeaturesOptions = state.configs.configs.tx.options;

  var features = state.configs.configs.visualization.features;
  var type = state.configs.configs.visualization.type;
  var encoding = state.configs.configs.visualization.encoding;
  var width = state.configs.configs.visualization.width;
  var representation = state.configs.configs.visualization.representation;

  //var tx = token.split(",");
  var tx = token;

  let newTokenDiv = document.createElement("div");
  let allParts = document.createElement("div");

  var divs = [];

  for (i = 0; i < features.length; i++) {
    divs[i] = document.createElement("div");
    var index = txFeatures.indexOf(features[i]);
    var allFeaturesRep = txFeaturesOptions[features[i]];
    var representationIndex = allFeaturesRep.indexOf(tx[index]);

    var repArray = representation[features[i]];
    var picOrColor = repArray[representationIndex];
    divs[i].style.width = width[i];
    divs[i].classList.add("divs");

    if (encoding[i] === "fixed") {
      if (type[i] == "pics") {
        var image = document.createElement("img");
        image.setAttribute("src", picOrColor);
        image.setAttribute("height", "100%");
        image.setAttribute("width", "100%");
        divs[i].appendChild(image);
      } else {
        divs[i].style.backgroundColor = picOrColor;
      }
    } else {
      var floor = Math.floor(tx[index]);
      var length = txFeaturesOptions[features[i]].length;

      for (let j = 0; j < length; j++) {
        if (floor > allFeaturesRep[j]) {
          if (type[i] == "pics") {
            var image = document.createElement("img");
            image.setAttribute("src", picOrColor);
            image.setAttribute("height", "20px");
            image.setAttribute("width", "100%");
            divs[i].appendChild(image);
          } else {
            divs[i].style.backgroundColor = repArray[j];
          }

          break;
        }
      }
    }

    allParts.appendChild(divs[i]);
  }

  allParts.classList.add("allParts");
  newTokenDiv.appendChild(allParts);

  let tokenContianer = document.getElementById(containerId);
  tokenContianer.insertBefore(newTokenDiv, tokenContianer.childNodes[0]);

  // to visualize one txs in help/tx visualization
  if (once) {
    once = false;
    tx_to_visualize = allParts;
    tx_visual(tx);
  }

  if (tokenContianer.childNodes.length > 35) {
    tokenContianer.removeChild(tokenContianer.childNodes[35]);
  }
};

export { printPics1, tx_to_visualize };
