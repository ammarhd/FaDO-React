import React, { useState } from "react";
import Select from "react-select";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";

function Pop2Config(props) {
  return (
    <div className="popup11-menu" id="layer1popup">
      <div className="configsFrame">
        <div className="txNum123">
          <div>Number of transactions</div>
          <div id="count1">{props.count}</div>
        </div>
      </div>
      <div className="configsButtons">
        <Button
          variant="contained"
          color="secondary"
          onClick={props.closePopup}
          id="closs"
        >
          Close
        </Button>
      </div>
    </div>
  );
}

export default Pop2Config;
