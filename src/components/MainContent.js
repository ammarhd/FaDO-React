import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import "./MainContent.css";
import "./layers/Layers.css";
import "./layers/Layers2.css";
import "./header/Navbar.css";

import Layer0 from "./layers/Layer0";
import Layer1 from "./layers/Layer1";
import Layer2 from "./layers/Layer2";
import Layer3 from "./layers/Layer3";
import image from "./defence.png";

import {
  generateOutput,
  generateOutput2,
  generateOutput3,
  generateOutput4,
} from "./layers/functions/generateOutputs";

import {
  counter0,
  counter1,
  counter2,
  counter3,
} from "./layers/functions/counter2human";

function MainContent() {
  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        generateOutput();
        generateOutput2();
        generateOutput3();
        generateOutput4();
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);

  counter0();
  counter1();
  counter2();
  counter3();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Layer0 />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Grid item xs={12}>
            <div className="dot">
              <img className="dott" src={image} />
            </div>
          </Grid>

          <Grid container>
            <Grid item xs={12} sm={5}>
              <div className="l1">
                <Layer1 />
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <div className="l2">
                <Layer2 />
              </div>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div className="l3">
                <Layer3 />
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainContent;
