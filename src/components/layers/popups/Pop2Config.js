import React, { useState } from "react";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import {
  options,
  options2,
  age,
  politics,
  children,
  employment,
  amount,
} from "./CofigInfo1";
import { recieveCall2 } from "../functions/txConfig2.js";

var prevConfigs = ["", "", "", "", "", "", "", "", "", "", "", "", ""];

function Pop2Config(props) {
  var selectedConfigs = ["", "", "", "", "", "", "", "", "", "", "", "", ""];
  const [countryS, setCountryS] = useState(prevConfigs[0]);
  selectedConfigs[0] = countryS;
  const [countryR, setCountryR] = useState(prevConfigs[1]);
  selectedConfigs[1] = countryR;

  const [pTypeS, setPtypeS] = useState(prevConfigs[2]);
  selectedConfigs[2] = pTypeS;
  const [pTypeR, setPtypeR] = useState(prevConfigs[3]);
  selectedConfigs[3] = pTypeR;

  const [ageS, setAgeS] = useState(prevConfigs[4]);
  selectedConfigs[4] = ageS;
  const [ageR, setAgeR] = useState(prevConfigs[5]);
  selectedConfigs[5] = ageR;

  const [politicS, setPoliticS] = useState(prevConfigs[6]);
  selectedConfigs[6] = politicS;
  const [politicR, setPoliticR] = useState(prevConfigs[7]);
  selectedConfigs[7] = politicR;

  const [childrenS, setChildrenS] = useState(prevConfigs[8]);
  selectedConfigs[8] = childrenS;
  const [childrenR, setChildrenR] = useState(prevConfigs[9]);
  selectedConfigs[9] = childrenR;

  const [employmentS, setEmploymentS] = useState(prevConfigs[10]);
  selectedConfigs[10] = employmentS;
  const [employmentR, setEmploymentR] = useState(prevConfigs[11]);
  selectedConfigs[11] = employmentR;

  const [amountt, setAmount] = useState(prevConfigs[12]);
  selectedConfigs[12] = amountt;

  function applyConfigs() {
    prevConfigs = selectedConfigs;
    recieveCall2(prevConfigs);
    props.closePopup();
  }

  return (
    <div className="popup11-menu" id="layer1popup">
      <div className="configsFrame">
        <Grid container>
          <Grid item xs={12}>
            <div className="txNum123">
              <div>Number of transactions</div>
              <div id="count1">{props.count}</div>
            </div>
          </Grid>
          <Grid container>
            <Grid item sm={4}>
              <div className="cNameAmount">
                <h4>Amount Of Money</h4>
              </div>
              <div className="cofigNames">
                <div className="cNames">
                  <h4>Country</h4>
                </div>
                <div className="cNames">
                  <h4>Age Group</h4>
                </div>
                <div className="cNames">
                  <h4>Type Of Person</h4>
                </div>
                <div className="cNames">
                  <h4>Is Politicaly Exposed</h4>
                </div>
                <div className="cNames">
                  <h4>Has Children</h4>
                </div>
                <div className="cNames">
                  <h4>Is Employed</h4>
                </div>
              </div>
            </Grid>
            <Grid item sm={8}>
              <Grid item sm={12}>
                <div className="configAmount">
                  <div className="configAmount2">
                    <Select
                      placeholder="Amount"
                      defaultValue={amountt}
                      onChange={setAmount}
                      options={amount}
                      isClearable
                    />
                  </div>
                </div>
              </Grid>
              <Grid container>
                <Grid item sm={6}>
                  <div className="senderNam">
                    <h4>Sender</h4>
                  </div>
                  <div className="senderConfig">
                    <div className="configs">
                      <Select
                        placeholder="Country"
                        defaultValue={countryS}
                        onChange={setCountryS}
                        options={options}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Age Group"
                        defaultValue={ageS}
                        onChange={setAgeS}
                        options={age}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Person Type"
                        defaultValue={pTypeS}
                        onChange={setPtypeS}
                        options={options2}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Politics"
                        defaultValue={politicS}
                        onChange={setPoliticS}
                        options={politics}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Children"
                        defaultValue={childrenS}
                        onChange={setChildrenS}
                        options={children}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Employment"
                        defaultValue={employmentS}
                        onChange={setEmploymentS}
                        options={employment}
                        isClearable
                      />
                    </div>
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className="receiverNam">
                    <h4>Receiver</h4>
                  </div>
                  <div className="recieverConfig">
                    <div className="configs">
                      <Select
                        placeholder="Country"
                        defaultValue={countryR}
                        onChange={setCountryR}
                        options={options}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Age Group"
                        defaultValue={ageR}
                        onChange={setAgeR}
                        options={age}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Person Type"
                        defaultValue={pTypeR}
                        onChange={setPtypeR}
                        options={options2}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Politics"
                        defaultValue={politicR}
                        onChange={setPoliticR}
                        options={politics}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Children"
                        defaultValue={childrenR}
                        onChange={setChildrenR}
                        options={children}
                        isClearable
                      />
                    </div>
                    <div className="configs">
                      <Select
                        placeholder="Employment"
                        defaultValue={employmentR}
                        onChange={setEmploymentR}
                        options={employment}
                        isClearable
                      />
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div className="configsButtons">
        <Button
          variant="contained"
          color="primary"
          onClick={applyConfigs}
          id="closs"
        >
          Apply
        </Button>

        <Button
          variant="contained"
          color="secondary"
          onClick={props.closePopup}
          id="closs"
        >
          Cancel
        </Button>
      </div>
    </div>
  );
}

export default Pop2Config;
