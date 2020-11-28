import React from "react";
import {
  generateOutput,
  generateOutput2,
  generateOutput3,
  generateOutput4,
  txsCount1,
  txsCount2,
  txsCount3,
  txsCount4,
} from "./functions/generateOutputs";

function handleTXs() {
  setInterval(() => {
    for (var j = 0; j < 100; j++) {
      generateOutput();
    }
  }, 1);
  return <div id="inflowLayer1"></div>;
}

export default handleTXs;
