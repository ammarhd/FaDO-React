import store from "../../../../../redux/store";

// to visualize one txs in help/tx visualization

var all_features_to_visualize = document.createElement("div");
var feature_names = [];
var single_feature = [];
var increment = 0;

var i;

export const tx_visual = (transaction) => {
  const state = store.getState();

  var txFeatures = state.configs.configs.tx.features;
  var txFeaturesOptions = state.configs.configs.tx.options;

  var features = state.configs.configs.visualization.features;
  var type = state.configs.configs.visualization.type;
  var encoding = state.configs.configs.visualization.encoding;
  var width = state.configs.configs.visualization.width;
  var representation = state.configs.configs.visualization.representation;

  //var tx = token.split(",");
  var tx = transaction;

  let newTokenDiv = document.createElement("div");

  //for tx visualization in help
  let tx_visual_allParts = document.createElement("div");

  var divs_visual = [];
  var divs_visual2 = [];

  for (i = 0; i < features.length; i++) {
    divs_visual[i] = document.createElement("div");
    var index = txFeatures.indexOf(features[i]);
    var allFeaturesRep = txFeaturesOptions[features[i]];
    var representationIndex = allFeaturesRep.indexOf(tx[index]);

    var repArray = representation[features[i]];
    var picOrColor = repArray[representationIndex];
    divs_visual[i].style.width = "20px";
    divs_visual[i].style.height = "20px";
    divs_visual[i].classList.add("divs_visual");

    if (encoding[i] === "fixed") {
      if (type[i] == "pics") {
        var image = document.createElement("img");
        image.setAttribute("src", picOrColor);
        image.setAttribute("height", "100%");
        image.setAttribute("width", "100%");
        divs_visual[i].appendChild(image);
      } else {
        divs_visual[i].style.backgroundColor = picOrColor;
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
            divs_visual[i].appendChild(image);
          } else {
            divs_visual[i].style.backgroundColor = repArray[j];
          }

          break;
        }
      }
    }

    // add feature div to array

    divs_visual2[i] = document.createElement("div");
    divs_visual2[i].classList.add("divs_visual2");
    divs_visual2[i].appendChild(divs_visual[i]);

    feature_names[increment] = document.createElement("div");
    feature_names[increment].classList.add("feature_name");
    feature_names[increment].innerHTML = `<div>${increment + 1}. ${
      features[i]
    }</div>`;
    ////////
    single_feature[increment] = document.createElement("div");
    single_feature[increment].classList.add("one_feature");
    single_feature[increment].appendChild(feature_names[increment]);

    single_feature[increment].appendChild(divs_visual2[i]);

    tx_visual_allParts.appendChild(single_feature[increment]);
    console.log(increment);
    increment++;
  }

  if (features.length > 18) {
    tx_visual_allParts.classList.add("all_features_visual2");
  } else {
    tx_visual_allParts.classList.add("all_features_visual");
  }

  // to visualize one txs in help/tx visualization

  all_features_to_visualize = tx_visual_allParts;
};

export { all_features_to_visualize };
