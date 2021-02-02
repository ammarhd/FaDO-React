import { LinearProgress } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

import Data from "./KPI.json";

function LineChart6() {
  var labels = Data.table.map(function (e) {
    return Math.round(e.id2);
  });

  var data1 = Data.table.map(function (e) {
    return e.FNr;
  });
  var data2 = Data.table.map(function (e) {
    return e.FPr;
  });
  var data3 = Data.table.map(function (e) {
    return e.precision;
  });
  var data4 = Data.table.map(function (e) {
    return e.recall;
  });

  const state = {
    labels: labels,

    datasets: [
      {
        label: "FPr",
        fill: false,
        backgroundColor: "rgb(168, 233, 240)",
        borderColor: "#EC30F2",
        borderWidth: 1,
        // Data for the x-axis of the chart
        data: data2,
      },
      {
        label: "FNr",
        fill: false,
        backgroundColor: "rgb(168, 233, 240)",
        borderColor: "#3325E8",
        borderWidth: 1,
        // Data for the x-axis of the chart
        data: data1,
      },
    ],
  };

  return (
    <div className="lineC">
      <Line
        data={state}
        height={200}
        options={{
          title: {
            display: true,
            text: "FADO Performance For Labeling 725951 TXs ( ≈ 200TXs/sec )",
          },
          scales: {
            yAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "%",
                },
                ticks: {
                  beginAtZero: true,
                  max: 0.22,
                  min: 0,
                  stepValue: 0.1,
                },
                gridLines: {
                  display: false,
                },
              },
            ],
            xAxes: [
              {
                scaleLabel: {
                  display: true,
                  labelString: "Minutes",
                },
                display: true,

                gridLines: {
                  display: true,
                },

                ticks: {
                  autoSkip: true,
                  maxTicksLimit: 15,
                },
              },
            ],
          },
          legend: {
            display: true,
            position: "right",
          },
          elements: {
            point: {
              radius: 0,
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart6;
