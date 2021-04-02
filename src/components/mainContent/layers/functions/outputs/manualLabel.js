import store from "../../../../../redux/store";
import "./output.css";

import { fadoN } from "../FaDO";

export const print_with_manualLabel = (token, vector, containerId) => {
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

  /////////////////// create btn

  let newTokenDiv = document.createElement("div");
  let s = "?";
  let btn = document.createElement("button");
  btn.setAttribute("style", "white-space: nowrap;");

  let allParts = document.createElement("div");

  let label = document.createElement("div");
  label.innerHTML = `<span id="normal">${s}</span>`;
  label.classList.add("labell");

  ////////////////

  allParts.appendChild(label);

  var divs = [];
  for (var i = 0; i < features.length; i++) {
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
  allParts.classList.add("allParts2");
  btn.appendChild(allParts);
  btn.classList.add("btnTXs");
  newTokenDiv.appendChild(btn);

  /////// menu

  let menu = document.createElement("div");
  let menu_features = document.createElement("div");
  let all_Features = document.createElement("div");

  let singleFeatures = [];
  for (var k = 0; k < txFeatures.length; k++) {
    singleFeatures[k] = document.createElement("div");
    singleFeatures[k].classList.add("single-features");
    singleFeatures[k].innerHTML = `<div>${txFeatures[k]} : ${tx[k]}</div>`;
    all_Features.appendChild(singleFeatures[k]);
  }

  let menuBtns = document.createElement("div");
  menuBtns.innerHTML = "<div id='dx'>Normal</div>";
  menuBtns.innerHTML += "<div>Fraud</div>";
  menuBtns.innerHTML += "<div id='canc'>Cancel</div>";

  menuBtns.classList.add("btn-menu");

  if (txFeatures.length > 18) {
    all_Features.classList.add("all-features2");
  } else {
    all_Features.classList.add("all-features");
  }

  menu_features.appendChild(all_Features);
  menu_features.classList.add("menu_features");

  menu.classList.add("popup-menu");
  menu.appendChild(menu_features);
  menu.appendChild(menuBtns);
  newTokenDiv.appendChild(menu);

  //////////

  /////// EventListner

  btn.addEventListener("click", (e) => {
    let menus = document.getElementsByClassName("show-menu");
    if (menus.length > 0) {
      for (var i = 0; i < menus.length; i++) {
        menus[i].classList.remove("show-menu");
      }
    }

    menu.classList.toggle("show-menu");
  });

  menuBtns.addEventListener("click", (e) => {
    let btnValue = e.target.innerHTML;
    if (btnValue == "Cancel") {
      menu.classList.remove("show-menu");
      return;
    } else if (btnValue == "Normal") {
      label.innerHTML = `<span id="add${btnValue}">${btnValue[0]}</span>`;

      btn.appendChild(allParts);

      //normalTX = token;
      var normalVec = vector;
      fadoN(normalVec);
      menu.classList.remove("show-menu");
    } else if (btnValue == "Fraud") {
      label.innerHTML = `<span id="add${btnValue}">${btnValue[0]}</span>`;

      btn.appendChild(allParts);

      //fraudTX = token;
      menu.classList.remove("show-menu");
    }
  });

  //////////////

  let tokenContianer = document.getElementById(containerId);
  tokenContianer.insertBefore(newTokenDiv, tokenContianer.childNodes[0]);
  if (tokenContianer.childNodes.length > 35) {
    tokenContianer.removeChild(tokenContianer.childNodes[35]);
  }
};
