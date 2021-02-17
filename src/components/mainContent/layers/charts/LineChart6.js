import React, { useState, useEffect } from "react";
import Histogram from "react-chart-histogram";
import { normArrayToDisplay } from "../functions/FaDO/arrayOfNorm";
import { setThreshold, x_axis } from "../functions/FaDO";
import { useForm } from "react-hook-form";

export default function LineChart6() {
  const labels = ["2017", "2018"];
  const data = [324, 45, 672];
  const options = { fillColor: "#FFFFFF", strokeColor: "#0000FF" };

  return (
    <div>
      <Histogram
        xLabels={labels}
        yValues={data}
        width="400"
        height="200"
        options={options}
      />
    </div>
  );
}
