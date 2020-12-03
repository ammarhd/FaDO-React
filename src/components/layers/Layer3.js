import React from "react";
import SetPop3 from "./popups/SetPop3";

function Layer3(props) {
  return (
    <div>
      <div>
        <SetPop3 name={"Layer 3"} />
      </div>
      <div id="tx3" className="txs"></div>
      <div id="layer4" className="mt-3 py-3">
        <div id="outflowLayer4"></div>
      </div>
    </div>
  );
}

export default Layer3;
