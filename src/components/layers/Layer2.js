import React from "react";
import SetPop2 from "./popups/SetPop2";

function Layer2(props) {
  return (
    <div>
      <div>
        <SetPop2 name={"Layer 2"} />
      </div>
      <div id="tx2" className="txs"></div>
      <div id="layer3" className="mt-3 py-3">
        <div id="outflowLayer3"></div>
      </div>
    </div>
  );
}

export default Layer2;
