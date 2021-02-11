import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { w } from "../functions/FaDO";

function LineChart() {
  const [W, setW] = useState(w);
  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setW((prevCount) => w);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);

  const state = {
    labels: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23,
      24,
      25,
      26,
      27,
      28,
      29,
      30,
      31,
      32,
      33,
      34,
      35,
      36,
      37,
      38,
      39,
      40,
      41,
      42,
      43,
      44,
    ],
    datasets: [
      {
        label: "Current values of W",
        backgroundColor: "rgb(168, 233, 240)",
        borderColor: "rgb(12, 70, 77)",
        borderWidth: 1,
        // Data for the x-axis of the chart
        data: [
          W[0],
          W[1],
          W[2],
          W[3],
          W[4],
          W[5],
          W[6],
          W[7],
          W[8],
          W[9],
          W[10],
          W[11],
          W[12],
          W[13],
          W[14],
          W[15],
          W[16],
          W[17],
          W[18],
          W[19],
          W[20],
          W[21],
          W[22],
          W[23],
          W[24],
          W[25],
          W[26],
          W[27],
          W[28],
          W[29],
          W[30],
          W[31],
          W[32],
          W[33],
          W[34],
          W[35],
          W[36],
          W[37],
          W[38],
          W[39],
          W[40],
          W[41],
          W[42],
          W[43],
          W[44],
        ],
      },
    ],
  };

  return (
    <div className="lineC">
      <Line
        data={state}
        height={100}
        options={{
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  steps: 10,
                  stepValue: 5,
                  max: 0.4,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                display: true,

                gridLines: {
                  display: true,
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}

export default LineChart;
