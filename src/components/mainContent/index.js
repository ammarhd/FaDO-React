import React, { useState, useEffect } from "react";

import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
import "./MainContent.css";
import "./layers/Layers.css";
import "./layers/Layers2.css";
//import "./header/Navbar.css";
//import "./header/extra.css";

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

const OurSlider = withStyles({
  root: {
    color: "#a4a4a4",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function valuetext(value) {
  return `${value}°C`;
}

function MainContent() {
  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    var sliderToInterval = (1 / value) * 1000;
    if (value > 900) {
      const interval = setInterval(() => {
        for (var j = 0; j < value; j++) {
          generateOutput();
          generateOutput2();
          generateOutput3();
          generateOutput4();
        }
      }, 1);
      return () => clearInterval(interval);
    }
    if (value > 750) {
      const interval = setInterval(() => {
        for (var j = 0; j < value; j++) {
          generateOutput();
          generateOutput2();
          generateOutput3();
          generateOutput4();
        }
      }, 1000);
      return () => clearInterval(interval);
    } else if (value > 600) {
      const interval = setInterval(() => {
        for (var j = 0; j < 100; j++) {
          generateOutput();
          generateOutput2();
          generateOutput3();
          generateOutput4();
        }
      }, sliderToInterval * 100);
      return () => clearInterval(interval);
    } else if (value > 500) {
      const interval = setInterval(() => {
        for (var j = 0; j < 10; j++) {
          generateOutput();
          generateOutput2();
          generateOutput3();
          generateOutput4();
        }
      }, sliderToInterval);
      return () => clearInterval(interval);
    } else if (value > 200) {
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
  }, [value]);

  counter0();
  counter1();
  counter2();
  counter3();

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <div className="range-slider">
            <Typography id="non-linear-slider" gutterBottom>
              TXs / Second
            </Typography>
            <OurSlider
              value={value}
              min={1}
              step={1}
              max={1000}
              getAriaValueText={valuetext}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="non-linear-slider"
            />
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
