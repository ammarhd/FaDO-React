import React, {
  Component,
  memo,
  useCallback,
  useState,
  useEffect,
  useMemo,
} from "react";
import RangeSlider from "./RangeSlider";
import { Grid } from "@material-ui/core";
import "./MainContent.css";
import "./layers/Layers.css";
import "./layers/Layers2.css";
import "./header/Navbar.css";

import Layer0 from "./layers/Layer0";
import Layer1 from "./layers/Layer1";
import Layer2 from "./layers/Layer2";
import Layer3 from "./layers/Layer3";
import image from "./fadoCC.png";

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
  const [parentVal, setParentVal] = useState(1);

  const sliderValueChanged = useCallback((val) => {
    console.log("NEW VALUE", val);
    setParentVal(val);
  });

  const sliderProps = useMemo(
    () => ({
      min: 1,
      max: 1000,
      value: parentVal,
      step: 2,
      onChange: (e) => sliderValueChanged(e),
    }),
    [parentVal]
  );

  useEffect(() => {
    var sliderToInterval = (1 / parentVal) * 1000;
    if (parentVal > 900) {
      const interval = setInterval(() => {
        for (var j = 0; j < parentVal; j++) {
          generateOutput();
          generateOutput2();
          generateOutput3();
          generateOutput4();
        }
      }, 1);
      return () => clearInterval(interval);
    }
    if (parentVal > 750) {
      const interval = setInterval(() => {
        for (var j = 0; j < parentVal; j++) {
          generateOutput();
          generateOutput2();
          generateOutput3();
          generateOutput4();
        }
      }, 1000);
      return () => clearInterval(interval);
    } else if (parentVal > 600) {
      const interval = setInterval(() => {
        for (var j = 0; j < 100; j++) {
          generateOutput();
          generateOutput2();
          generateOutput3();
          generateOutput4();
        }
      }, sliderToInterval * 100);
      return () => clearInterval(interval);
    } else if (parentVal > 500) {
      const interval = setInterval(() => {
        for (var j = 0; j < 10; j++) {
          generateOutput();
          generateOutput2();
          generateOutput3();
          generateOutput4();
        }
      }, sliderToInterval);
      return () => clearInterval(interval);
    } else if (parentVal > 200) {
      const interval = setInterval(() => {
        for (var j = 0; j < 10; j++) {
          generateOutput();
          generateOutput2();
          generateOutput3();
          generateOutput4();
        }
      }, sliderToInterval * 10);
      return () => clearInterval(interval);
    } else {
      const interval = setInterval(() => {
        generateOutput();
        generateOutput2();
        generateOutput3();
        generateOutput4();
      }, sliderToInterval);
      return () => clearInterval(interval);
    }
  }, [parentVal]);

  counter0();
  counter1();
  counter2();
  counter3();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <div>
            <RangeSlider {...sliderProps} classes="additional-css-classes" />
          </div>
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
