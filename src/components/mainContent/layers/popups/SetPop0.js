import React, { useState, useEffect } from "react";
import HisChart from "../charts/HisChart";
import BarChart from "../charts/BarChart";
import LineChart from "../charts/LineChart";
import "./popups.css";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import {
  layer0count,
  numFlagTx,
  setThreshold,
  threshold_final,
  setGammaValue,
  gamma_final,
} from "../functions/FaDO";

function SetPopup0(props) {
  const [isOpen, setIsOpen] = useState(false);

  const [count1, setCount1] = useState(layer0count);
  const [count2, setCount2] = useState(numFlagTx);
  const [thresH, setThresH] = useState(threshold_final);
  const [Gamma, setGamma] = useState(gamma_final);

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

  ///// threshold functions

  const thresholdMinus = () => {
    console.log(-1);
    setThreshold(-0.3);
    setThresH((prevCount) => threshold_final);
  };
  const thresholdAdd = () => {
    console.log(1);
    setThreshold(0.3);
    setThresH((prevCount) => threshold_final);
  };

  ////// gamma functions
  const gammaMinus = () => {
    setGammaValue(-0.1);
    setGamma((prevCount) => gamma_final);
  };
  const gammaAdd = () => {
    setGammaValue(0.1);
    setGamma((prevCount) => gamma_final);
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
            <div className="dynamicV">
              <div className="threshold">
                <div>Threshold value</div>
                <IconButton id="thres" onClick={thresholdMinus}>
                  <RemoveIcon />
                </IconButton>
                <div className="val">{thresH}</div>
                <IconButton id="thres" onClick={thresholdAdd}>
                  <AddIcon />
                </IconButton>
              </div>
              <div className="gamma">
                <div>Gamma value</div>
                <IconButton id="thres" onClick={gammaMinus}>
                  <RemoveIcon />
                </IconButton>
                <div className="val">{Gamma}</div>

                <IconButton id="thres" onClick={gammaAdd}>
                  <AddIcon />
                </IconButton>
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
