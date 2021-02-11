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
  const [count1, setCount1] = useState(layer0count);
  const [count2, setCount2] = useState(tp);
  const [count3, setCount3] = useState(fp);
  const [count4, setCount4] = useState(tn);
  const [count5, setCount5] = useState(fn);
  const [count6, setCount6] = useState(na);
  const [count7, setCount7] = useState(tvalue);
  const [count8, setCount8] = useState(fvalue);
  const [count9, setCount9] = useState(nf);
  const [count10, setCount10] = useState(l0c);

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setCount1((prevCount) => layer0count - allTxs);
        setCount2((prevCount) => tp - trueP);
        setCount3((prevCount) => fp - falseP);
        setCount4((prevCount) => tn - trueN);
        setCount5((prevCount) => fn - falseN);
        setCount6((prevCount) => na - nAlarm);
        setCount7((prevCount) => tvalue - trueValue);
        setCount8((prevCount) => fvalue - falseValue);
        setCount9((prevCount) => nf - nFrauds);
        setCount10((prevCount) => l0c);
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
    var num = (count2 / (count2 + count5)) * 100;
    return num.toFixed(2);
  }
  function precision() {
    var num = (count2 / (count2 + count3)) * 100;
    return num.toFixed(2);
  }
  function label() {
    var num = (count6 / count1) * 100;
    return num.toFixed(2);
  }

  return (
    <div className="popup-kpi">
      <div className="kpi">
        <div className="kpi2">
          <p>
            We compute key performance indicators (KPIs) of the result based on
            an artificial reference labeling where 1% of the TXs in 'IT' (chosen
            at random) are labeled as fraudulent, while other countries have a
            portion of 0.1% of the TXs labeled (chosen at random) as fraudulent.
          </p>
        </div>
        <div className="lists">
          <div className="list1">
            <ul>
              <li>
                <div className="float">Computational Efficiency</div>
                <div className="float2"> {count10}</div>
              </li>
              <li>
                <div className="float">Label Efficiency</div>
                <div className="float2"> {label()} %</div>
              </li>

              <li>
                <div className="float">Detect a total value</div>
                <div className="float2"> {count7} $</div>
              </li>
              <li>
                <div className="float">Total fraud value</div>
                <div className="float2"> {count8} $</div>
              </li>
              <li>
                <div className="float">Recall</div>
                <div className="float2"> {recall()} %</div>
              </li>
              <li>
                <div className="float">Precision</div>
                <div className="float2"> {precision()} %</div>
              </li>
            </ul>
          </div>
          <div className="list2">
            <ul>
              <li>
                <div className="float">Processed Transactions</div>
                <div className="float2"> {count1}</div>
              </li>
              <li>
                <div className="float">Number Of Alarms</div>
                <div className="float2"> {count6}</div>
              </li>
              <li>
                <div className="float">Number Of Frauds</div>
                <div className="float2"> {count9}</div>
              </li>
              <li>
                <div className="float">True Positives</div>
                <div className="float2"> {count2}</div>
              </li>
              <li>
                <div className="float">False Positives</div>
                <div className="float2"> {count3}</div>
              </li>
              <li>
                <div className="float">True Negatives</div>
                <div className="float2"> {count4}</div>
              </li>
              <li>
                <div className="float">False Negatives</div>
                <div className="float2"> {count5}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="kpiButtons">
        <Button
          variant="contained"
          color="primary"
          onClick={restart}
          id="restart"
        >
          Reset
        </Button>

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
export default KPI;
