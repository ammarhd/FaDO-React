import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import {
  na,
  nf,
  tvalue,
  fvalue,
  tp,
  fp,
  tn,
  fn,
} from "../../../mainContent/layers/functions/FaDO/adminstration";
import { layer0count } from "../../../mainContent/layers/functions/FaDO";
import "./extra.css";
import "../Navbar.css";

import { l0c } from "../../../mainContent/layers/functions/counter2human";

var nAlarm = 0;
var nFrauds = 0;
var trueValue = 0;
var falseValue = 0;
var trueP = 0;
var falseP = 0;
var trueN = 0;
var falseN = 0;
var allTxs = 0;

function KPI(props) {
  const [NumOfTxs, setNumOfTxs] = useState(layer0count);
  const [TrueP, setTrueP] = useState(tp);
  const [FalseP, setFalseP] = useState(fp);
  const [TrueN, setTrueN] = useState(tn);
  const [FalseN, setFalseN] = useState(fn);
  const [NumOfAlarms, setNumOfAlarms] = useState(na);
  const [TrueV, setTrueV] = useState(tvalue);
  const [FalseV, setFalseV] = useState(fvalue);
  const [NumOfFrauds, setNumOfFrauds] = useState(nf);
  const [cEfficiency, setcEfficiency] = useState(l0c);

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setNumOfTxs((prevCount) => layer0count - allTxs);
        setTrueP((prevCount) => tp - trueP);
        setFalseP((prevCount) => fp - falseP);
        setTrueN((prevCount) => tn - trueN);
        setFalseN((prevCount) => fn - falseN);
        setNumOfAlarms((prevCount) => na - nAlarm);
        setTrueV((prevCount) => tvalue - trueValue);
        setFalseV((prevCount) => fvalue - falseValue);
        setNumOfFrauds((prevCount) => nf - nFrauds);
        setcEfficiency((prevCount) => l0c);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);

  function restart() {
    nAlarm = na;
    nFrauds = nf;
    trueValue = tvalue;
    falseValue = fvalue;
    trueP = tp;
    falseP = fp;
    trueN = tn;
    falseN = fn;
    allTxs = layer0count;
  }

  function recall() {
    var num = (TrueP / (TrueP + FalseN)) * 100;
    return num.toFixed(2);
  }
  function precision() {
    var num = (TrueP / (TrueP + FalseP)) * 100;
    return num.toFixed(2);
  }
  function label() {
    var num = (NumOfAlarms / NumOfTxs) * 100;
    return num.toFixed(2);
  }

  return (
    <div className="popup-kpi">
      <div className="kpi">
        <div className="kpi2">
          <p>
            This window displays Key performance Indexes (KPIs) computed on the
            data processed thus far. If the data includes a feature called
            'amount' and 'label', we have:
          </p>
        </div>
        <div className="lists">
          <div className="list">
            <div className="list_item">
              <div className="float">Computational Efficiency</div>
              <div className="float2"> {cEfficiency}</div>
            </div>

            {NumOfAlarms > 0 ? (
              <div className="list_item">
                <div className="float">Label Efficiency</div>
                <div className="float2"> {label()} %</div>
              </div>
            ) : (
              <div className="list_item">
                <div className="float">Label Efficiency</div>
                <div className="float2"> </div>
              </div>
            )}

            <div className="list_item">
              <div className="float">Detect a total value</div>
              <div className="float2"> {TrueV} $</div>
            </div>
            <div className="list_item">
              <div className="float">Total fraud value</div>
              <div className="float2"> {FalseV} $</div>
            </div>
            {TrueP > 0 ? (
              <div className="list_item">
                <div className="float">Recall</div>
                <div className="float2">{recall()} % </div>
              </div>
            ) : (
              <div className="list_item">
                <div className="float">Recall</div>
                <div className="float2"> </div>
              </div>
            )}
            {TrueP > 0 ? (
              <div className="list_item">
                <div className="float">Precision</div>
                <div className="float2"> {precision()} %</div>
              </div>
            ) : (
              <div className="list_item">
                <div className="float">Precision</div>
                <div className="float2"> </div>
              </div>
            )}
          </div>
          <div className="list">
            <div className="list_item">
              <div className="float">Processed Transactions</div>
              <div className="float2"> {NumOfTxs}</div>
            </div>
            <div className="list_item">
              <div className="float">Number Of Alarms</div>
              <div className="float2"> {NumOfAlarms}</div>
            </div>
            <div className="list_item">
              <div className="float">Number Of Frauds</div>
              <div className="float2"> {NumOfFrauds}</div>
            </div>
            <div className="list_item">
              <div className="float">True Positives</div>
              <div className="float2"> {TrueP}</div>
            </div>
            <div className="list_item">
              <div className="float">False Positives</div>
              <div className="float2"> {FalseP}</div>
            </div>
            <div className="list_item">
              <div className="float">True Negatives</div>
              <div className="float2"> {TrueN}</div>
            </div>
            <div className="list_item">
              <div className="float">False Negatives</div>
              <div className="float2"> {FalseN}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="kpiButtons">
        <Button
          variant="contained"
          color="default"
          onClick={restart}
          id="kpi_restart"
        >
          Reset
        </Button>

        <Button
          variant="contained"
          color="default"
          onClick={props.closePopup}
          id="kpi_close"
        >
          Close
        </Button>
      </div>
    </div>
  );
}
export default KPI;
