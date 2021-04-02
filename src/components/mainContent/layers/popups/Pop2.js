import React, { useState, useEffect } from "react";
import { layer2count } from "../functions/FaDO";

import IconButton from "@material-ui/core/IconButton";
import CancelIcon from "@material-ui/icons/Cancel";

function Pop2(props) {
  const [count, setCount] = useState(layer2count);

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setCount((prevCount) => layer2count);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="popup11-menu" id="layer1popup">
      <div className="configsFrame">
        <div className="txNum23">
          <div>Number of transactions</div>
          <div id="count1" className="count23">
            {count}
          </div>
        </div>
      </div>
      <div className="configsButtons">
        <IconButton aria-label="delete" onClick={props.closePopup} id="closss">
          <CancelIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
}

export default Pop2;
