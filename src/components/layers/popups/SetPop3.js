import React, { useState, useEffect } from "react";

import Button from "@material-ui/core/Button";
import { layer3count } from "../functions/txConfig2.js";

import { ii, f, n, label, rand } from "../functions/generateOutputs";

function SetPopup3(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [count, setCount] = useState(layer3count);

  useEffect(() => {
    const interval = setInterval(() => {
      var k = 1;
      for (var j = 0; j < 100; j++) {
        setCount((prevCount) => layer3count);
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        component="span"
        id="layer1Btn"
        onClick={togglePopup}
      >
        <h2>{props.name}</h2>
      </Button>
      {isOpen && (
        <div className="popup123-menu" id="layer1popup">
          <div className="txNum123">
            <div>Number of transactions</div>
            <div id="count3">{count}</div>
            <div id="count3">
              {ii} TXs: ( {label} ) {rand}
            </div>
            <div id="count3">
              Frauds= {f} ( {(f / ii) * 100} % )
            </div>
            <div id="count3">
              Normals= {n} ( {(n / ii) * 100} % )
            </div>
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={togglePopup}
            id="clos"
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
}

export default SetPopup3;
