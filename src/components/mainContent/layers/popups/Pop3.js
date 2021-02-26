import React, { useState, useEffect } from "react";
import { layer1count } from "../functions/FaDO";
import Button from "@material-ui/core/Button";

function Pop3(props) {
  const [count, setCount] = useState(layer1count);

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setCount((prevCount) => layer1count);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="popup33-menu" id="layer1popup">
      <div className="configsFrame">
        <div className="txNum123">
          <div>Number of transactions</div>
          <div id="count1">{count}</div>
        </div>
      </div>
      <div className="configsButtons">
        <Button
          variant="contained"
          color="secondary"
          onClick={props.closePopup}
          id="closss"
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default Pop3;
