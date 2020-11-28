import { fadoN } from "./FaDO.js";
var normalTX = [];
var normalVec = [];
var fraudTX = [];
const printOutput = (token, pics, containerId) => {
  let newTokenDiv = document.createElement("div");
  let nodeToken = document.createTextNode(token);
  newTokenDiv.appendChild(nodeToken);
  let tokenContianer = document.getElementById(containerId);
  tokenContianer.insertBefore(newTokenDiv, tokenContianer.childNodes[0]);
};

const printOutput4 = (token, pics, token_vec, containerId) => {
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

  let newTokenDiv = document.createElement("div");
  let s = "?";
  let btn = document.createElement("button");
  //btn.setAttribute('type', 'button')
  btn.innerHTML = `<span id="normal">${s}</span>${token}`;
  btn.setAttribute("style", "white-space: nowrap;");
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
      btn.innerHTML = `<span id="add${btnValue}">${btnValue[0]}</span>${token}`;
      normalTX = token;
      normalVec = token_vec;
      fadoN(normalVec);
      menu.classList.remove("show-menu");
    } else if (btnValue == "Fraud") {
      btn.innerHTML = `<span id="add${btnValue}">${btnValue[0]}</span>${token}`;
      fraudTX = token;
      menu.classList.remove("show-menu");
    }

    //btn.setAttribute('value', e.target.innerHTML + token )
  });

  let tokenContianer = document.getElementById(containerId);
  tokenContianer.insertBefore(newTokenDiv, tokenContianer.childNodes[0]);
};

export { printOutput, printOutput4 };
