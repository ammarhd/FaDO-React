import store from "../../../../../store";
import "./output.css";

import { fadoN } from "../FaDO";

const printPics2 = (token, vector, containerId) => {
  const state = store.getState();

  var txFeatures = state.configSlice.configs.tx.features;
  var txFeaturesOptions = state.configSlice.configs.tx.options;

  var features = state.configSlice.configs.visualization.features;
  var type = state.configSlice.configs.visualization.type;
  var encoding = state.configSlice.configs.visualization.encoding;
  var width = state.configSlice.configs.visualization.width;
  var representation = state.configSlice.configs.visualization.representation;

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
  let menuFeatures = document.createElement("div");
  let menuFeatures1 = document.createElement("div");
  let menuFeatures2 = document.createElement("div");
  let singleFeatures = [];
  for (var k = 0; k < txFeatures.length; k++) {
    singleFeatures[k] = document.createElement("div");
    singleFeatures[k].classList.add("single-features");
    singleFeatures[k].innerHTML = `<div>${txFeatures[k]} : ${tx[k]}</div>`;
    menuFeatures1.appendChild(singleFeatures[k]);

    if (k < txFeatures.length - 1) {
      singleFeatures[k + 1] = document.createElement("div");
      singleFeatures[k + 1].classList.add("single-features");
      singleFeatures[k + 1].innerHTML = `<div>${txFeatures[k + 1]} : ${
        tx[k + 1]
      }</div>`;
      menuFeatures2.appendChild(singleFeatures[k + 1]);

      k++;
    }
  }
  menuFeatures.appendChild(menuFeatures1);
  menuFeatures.appendChild(menuFeatures2);

  let menuBtns = document.createElement("div");
  menuBtns.innerHTML = "<div id='dx'>Normal</div>";
  menuBtns.innerHTML += "<div>Fraud</div>";
  menuBtns.innerHTML += "<div id='canc'>Cancel</div>";

  menuBtns.classList.add("btn-menu");
  menuFeatures1.classList.add("menu-features1");
  menuFeatures2.classList.add("menu-features2");
  menuFeatures.classList.add("menu-features");
  menu.classList.add("popup-menu");
  menu.appendChild(menuFeatures);
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

export default printPics2;
