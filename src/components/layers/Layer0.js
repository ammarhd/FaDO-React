import React from "react";
import Paper from "@material-ui/core/Paper";
import SetPop0 from "./popups/SetPop0";

function Layer0(props) {
  return (
    <div>
      <div>
        <SetPop0 name={"Layer 0"} />
      </div>

      <div id="tx0" className="txs"></div>

      <div id="inflow" className="mt-3 py-3">
        <div id="inflowLayer1"></div>
      </div>
    </div>
  );
}

export default Layer0;
