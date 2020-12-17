import { fadoN } from "./FaDO.js";
import DE from "./flags/DE.png";
import BE from "./flags/BE.png";
import AT from "./flags/AT.png";
import FR from "./flags/FR.png";
import EE from "./flags/EE.png";
import ES from "./flags/ES.png";
import IT from "./flags/IT.png";
import LT from "./flags/LT.png";
import NL from "./flags/NL.png";
import CZ from "./flags/CZ.png";
import BG from "./flags/BG.png";
import EL from "./flags/EL.png";
import HR from "./flags/HR.png";
import CY from "./flags/CY.png";
import DK from "./flags/DK.png";
import IE from "./flags/IE.png";
import HU from "./flags/HU.png";
import LV from "./flags/LV.png";
import LU from "./flags/LU.png";
import MT from "./flags/MT.png";

var normalTX = [];
var normalVec = [];
var fraudTX = [];

var countries = [
  DE,
  BE,
  AT,
  FR,
  EE,
  ES,
  IT,
  LT,
  NL,
  CZ,
  BG,
  EL,
  HR,
  CY,
  DK,
  IE,
  HU,
  LV,
  LU,
  MT,
];

const printPics1 = (token, pics, containerId) => {
  var allInfo = [];
  allInfo = txToArray(token);

  let newTokenDiv = document.createElement("div");

  let allParts = document.createElement("div");

  let middle = document.createElement("div");
  let middleAmount = document.createElement("div");
  let middleType1 = document.createElement("div");
  let middleType2 = document.createElement("div");

  middleAmount.style.backgroundColor = pics[2];

  if (allInfo[4] === "Natural") {
    middleType1.style.backgroundColor = "#ffffff";
  } else {
    middleType1.style.backgroundColor = "#366EEA";
  }

  if (allInfo[10] === "Natural") {
    middleType2.style.backgroundColor = "#ffffff";
  } else {
    middleType2.style.backgroundColor = "#366EEA";
  }

  middleType1.classList.add("middleType1");
  middleType2.classList.add("middleType2");
  middleAmount.classList.add("middleAmount");

  middle.appendChild(middleType1);
  middle.appendChild(middleAmount);
  middle.appendChild(middleType2);

  let pic1 = document.createElement("img");
  pic1.src = countries[pics[0]];
  let pic2 = document.createElement("img");
  pic2.src = countries[pics[1]];

  pic1.classList.add("pic1");
  pic2.classList.add("pic1");

  allParts.classList.add("allParts");
  middle.classList.add("middle");
  //part2.classList.add("part2");

  //part1.appendChild(pic1);
  //part2.appendChild(pic2);

  allParts.appendChild(pic1);
  allParts.appendChild(middle);
  allParts.appendChild(pic2);

  newTokenDiv.appendChild(allParts);

  let tokenContianer = document.getElementById(containerId);
  tokenContianer.insertBefore(newTokenDiv, tokenContianer.childNodes[0]);
  if (tokenContianer.childNodes.length > 35) {
    tokenContianer.removeChild(tokenContianer.childNodes[35]);
  }
};

const printPics4 = (token, pics, token_vec, containerId) => {
  var allInfo = [];
  allInfo = txToArray(token);

  let newTokenDiv = document.createElement("div");
  let s = "?";
  let btn = document.createElement("button");
  //btn.setAttribute('type', 'button')
  btn.setAttribute("style", "white-space: nowrap;");

  //new addition

  let allParts = document.createElement("div");

  let label = document.createElement("div");
  label.innerHTML = `<span id="normal">${s}</span>`;
  label.classList.add("labell");

  let middle = document.createElement("div");
  let middleAmount = document.createElement("div");
  let middleType1 = document.createElement("div");
  let middleType2 = document.createElement("div");

  middleAmount.style.backgroundColor = pics[2];

  if (allInfo[4] === "Natural") {
    middleType1.style.backgroundColor = "#ffffff";
  } else {
    middleType1.style.backgroundColor = "#366EEA";
  }

  if (allInfo[10] === "Natural") {
    middleType2.style.backgroundColor = "#ffffff";
  } else {
    middleType2.style.backgroundColor = "#366EEA";
  }

  middleType1.classList.add("middleType1");
  middleType2.classList.add("middleType2");
  middleAmount.classList.add("middleAmount");

  middle.appendChild(middleType1);
  middle.appendChild(middleAmount);
  middle.appendChild(middleType2);

  let pic1 = document.createElement("img");
  pic1.src = countries[pics[0]];
  let pic2 = document.createElement("img");
  pic2.src = countries[pics[1]];

  pic1.classList.add("pic1");
  pic2.classList.add("pic1");

  allParts.classList.add("Parts");

  middle.classList.add("middle");

  allParts.appendChild(label);
  allParts.appendChild(pic1);
  allParts.appendChild(middle);
  allParts.appendChild(pic2);

  btn.appendChild(allParts);

  //tn.setAttribute('value', s + token)

  let menu = document.createElement("div");
  let menu_t = document.createElement("div");

  menu_t.innerHTML = "AMOUNT" + "&ensp;" + "&ensp;" + allInfo[2];

  let menu2 = document.createElement("div");
  let menu2l = document.createElement("div");
  let menu2r = document.createElement("div");

  let menu2l_t = document.createElement("div");
  let menu2l_b = document.createElement("div");

  let menu2rl = document.createElement("div");
  let menu2rl_t = document.createElement("div");
  let menu2rl_b = document.createElement("div");

  let menu2rr = document.createElement("div");
  let menu2rr_t = document.createElement("div");
  let menu2rr_b = document.createElement("div");

  menu2l_t.innerHTML = "INFORMATION" + "<br/>";

  menu2l_b.innerHTML = "ID" + "<br/>";
  menu2l_b.innerHTML += "Country" + "<br/>";
  menu2l_b.innerHTML += "Type Of Person" + "<br/>";
  menu2l_b.innerHTML += "Age Group" + "<br/>";
  menu2l_b.innerHTML += "Is Politically Exposed" + "<br/>";
  menu2l_b.innerHTML += "Has Children" + "<br/>";
  menu2l_b.innerHTML += "Is Employed" + "<br/>";

  menu2rl_t.innerHTML = "SENDER" + "<br/>";
  menu2rr_t.innerHTML = "RECEIVER" + "<br/>";

  menu2rl_b.innerHTML = allInfo[0] + "<br/>";
  menu2rl_b.innerHTML += allInfo[3] + "<br/>";
  menu2rl_b.innerHTML += allInfo[4] + "<br/>";
  menu2rl_b.innerHTML += allInfo[5] + "<br/>";
  menu2rl_b.innerHTML += allInfo[6] + "<br/>";
  menu2rl_b.innerHTML += allInfo[7] + "<br/>";
  menu2rl_b.innerHTML += allInfo[8] + "<br/>";
  menu2rr_b.innerHTML += allInfo[1] + "<br/>";
  menu2rr_b.innerHTML += allInfo[9] + "<br/>";
  menu2rr_b.innerHTML += allInfo[10] + "<br/>";
  menu2rr_b.innerHTML += allInfo[11] + "<br/>";
  menu2rr_b.innerHTML += allInfo[12] + "<br/>";
  menu2rr_b.innerHTML += allInfo[13] + "<br/>";
  menu2rr_b.innerHTML += allInfo[14] + "<br/>";

  let menu3 = document.createElement("div");
  menu3.innerHTML = "<div id='dx'>Normal</div>";
  menu3.innerHTML += "<div>Fraud</div>";
  menu3.innerHTML += "<div id='canc'>Cancel</div>";

  menu2l_b.classList.add("lBot");

  menu2rl_t.classList.add("topp");
  menu2rr_t.classList.add("topp");
  menu2l_t.classList.add("topp");

  menu2rl.classList.add("rl-col");
  menu2rr.classList.add("rr-col");
  menu2l.classList.add("left-col");
  menu2r.classList.add("right-col");
  menu2.classList.add("info-menu");
  menu3.classList.add("btn-menu");
  menu_t.classList.add("amount");
  menu.classList.add("popup-menu");
  btn.classList.add("btnTXs");

  menu2l.appendChild(menu2l_t);
  menu2l.appendChild(menu2l_b);
  menu2rl.appendChild(menu2rl_t);
  menu2rl.appendChild(menu2rl_b);
  menu2rr.appendChild(menu2rr_t);
  menu2rr.appendChild(menu2rr_b);

  menu2r.appendChild(menu2rl);
  menu2r.appendChild(menu2rr);
  menu2.appendChild(menu2l);
  menu2.appendChild(menu2r);

  menu.appendChild(menu_t);
  menu.appendChild(menu2);
  menu.appendChild(menu3);
  newTokenDiv.appendChild(btn);
  newTokenDiv.appendChild(menu);

  btn.addEventListener("click", (e) => {
    let menus = document.getElementsByClassName("show-menu");
    if (menus.length > 0) {
      for (var i = 0; i < menus.length; i++) {
        menus[i].classList.remove("show-menu");
      }
    }

    menu.classList.toggle("show-menu");
    //console.log(e.target)
  });

  menu3.addEventListener("click", (e) => {
    let btnValue = e.target.innerHTML;
    if (btnValue == "Cancel") {
      menu.classList.remove("show-menu");
      return;
    } else if (btnValue == "Normal") {
      label.innerHTML = `<span id="add${btnValue}">${btnValue[0]}</span>`;

      btn.appendChild(allParts);

      normalTX = token;
      normalVec = token_vec;
      fadoN(normalVec);
      menu.classList.remove("show-menu");
    } else if (btnValue == "Fraud") {
      label.innerHTML = `<span id="add${btnValue}">${btnValue[0]}</span>`;

      btn.appendChild(allParts);

      fraudTX = token;
      menu.classList.remove("show-menu");
    }

    //btn.setAttribute('value', e.target.innerHTML + token )
  });

  let tokenContianer = document.getElementById(containerId);
  tokenContianer.insertBefore(newTokenDiv, tokenContianer.childNodes[0]);
  if (tokenContianer.childNodes.length > 15) {
    tokenContianer.removeChild(tokenContianer.childNodes[15]);
  }
};

const txToArray = (token) => {
  var allInfo = [];
  var partInfo = [];
  var loadInfo = [];
  for (let i = 0; i < token.length; i++) {
    if (token[i] == ",") {
      loadInfo = partInfo;
      partInfo = [];
      allInfo.push(loadInfo);
      i++;
    }
    partInfo += token[i];
    if (i == token.length - 1) {
      allInfo.push(partInfo);
    }
  }

  for (let i = 0; i < allInfo.length; i++) {
    if (i == 5 || i == 11) {
      if (allInfo[i] == 1) {
        allInfo[i] = "15 - 24";
      } else if (allInfo[i] == 2) {
        allInfo[i] = "25 - 49";
      } else if (allInfo[i] == 3) {
        allInfo[i] = "50 - 64";
      } else if (allInfo[i] == 4) {
        allInfo[i] = "65 - 79";
      } else if (allInfo[i] == 5) {
        allInfo[i] = "80 - Above";
      } else if (i == 5) {
        if (allInfo[i] == 0) {
          allInfo[5] = "-";
          allInfo[6] = "-";
          allInfo[7] = "-";
          allInfo[8] = "-";
        }
      } else if (i == 11) {
        if (allInfo[i] == 0) {
          allInfo[11] = "-";
          allInfo[12] = "-";
          allInfo[13] = "-";
          allInfo[14] = "-";
        }
      }
    } else if ((allInfo[i] == 0) & (i != 5) & (i != 11)) {
      allInfo[i] = "No";
    } else if ((allInfo[i] == 1) & (i != 5) & (i != 11)) {
      allInfo[i] = "Yes";
    }
  }
  return allInfo;
};

export { printPics1, printPics4 };
