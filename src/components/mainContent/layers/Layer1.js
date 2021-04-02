import React from "react";
import SetPop1 from "./popups/SetPop1";

function Layer1() {
  return (
    <div>
      <div>
        <SetPop1 name={"Layer 1"} />
      </div>

      <div id="tx1" className="txs"></div>
      <div id="layer2" className="mt-3 py-3">
        <div id="outflowLayer2"></div>
      </div>
    </div>
  );
}

export default Layer1;
