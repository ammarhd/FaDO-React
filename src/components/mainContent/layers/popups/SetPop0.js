import React, { useState, useEffect } from "react";
import HisChart from "../charts/HisChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";

import Button from "@material-ui/core/Button";

import { layer0count, numFlagTx } from "../functions/FaDO";

function SetPopup0(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [count1, setCount1] = useState(layer0count);
  const [count2, setCount2] = useState(numFlagTx);

  //function countAll() {
  //  setCount1((prevCount) => 0 + l0);
  //  setCount2((prevCount) => 0 + m_t);
  //}

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setCount1((prevCount) => 0 + layer0count);
        setCount2((prevCount) => 0 + numFlagTx);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="default"
        component="span"
        id="layer1Btn"
        onClick={togglePopup}
      >
        <h2>{props.name}</h2>
      </Button>
      {isOpen && (
        <div className="popup0-menu">
          <div className="boxx">
            <div className="txNum">
              <div className="allTxNum">
                <div>Number of transactions &nbsp; {count1}</div>
              </div>
              <div className="fiterdTxNum">
                <div>Number of flagged transactions &nbsp; {count2}</div>
              </div>
              <div>
                <button onClick={togglePopup} id="clos0">
                  X
                </button>
              </div>
            </div>
            <HisChart />
            <LineChart />
            <BarChart />
          </div>
        </div>
      )}
    </div>
  );
}

export default SetPopup0;
