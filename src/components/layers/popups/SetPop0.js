import React, { useState, useEffect } from "react";
import HisChart from "../charts/HisChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";

import Button from "@material-ui/core/Button";

import { l0, m_t } from "../functions/FaDO.js";

function SetPopup0(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [count1, setCount1] = useState(l0);
  const [count2, setCount2] = useState(m_t);

  //function countAll() {
  //  setCount1((prevCount) => 0 + l0);
  //  setCount2((prevCount) => 0 + m_t);
  //}

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setCount1((prevCount) => 0 + l0);
        setCount2((prevCount) => 0 + m_t);
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
                <div>Number of transactions</div>
                <div id="allTx0">{count1}</div>
              </div>
              <div className="fiterdTxNum">
                <div>Number of flagged transactions</div>
                <div id="flagged0">{count2}</div>
              </div>
            </div>
            <HisChart />
            <LineChart />
            <BarChart />
            <Button
              variant="contained"
              color="default"
              onClick={togglePopup}
              id="clos"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SetPopup0;
