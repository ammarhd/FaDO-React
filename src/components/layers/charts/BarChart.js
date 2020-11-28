import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { averageTX, l0 } from "../functions/FaDO.js";

function BarChart() {
  const [txs, setTxs] = useState(l0);
  const [txArray, setTxArray] = useState(averageTX);
  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setTxs((prevCount) => l0);
        setTxArray((prev) => averageTX);
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
        label: "The average TX",
        backgroundColor: "rgb(244, 142, 223)",
        borderColor: "rgb(38, 2, 31)",
        pointBackgroundColor: "rgb(75, 7, 62)",
        borderWidth: 1,
        pointBorderColor: "rgb(75, 7, 62)",
        // Data for the x-axis of the chart
        data: [
          txArray[0] / txs,
          txArray[1] / txs,
          txArray[2] / txs,
          txArray[3] / txs,
          txArray[4] / txs,
          txArray[5] / txs,
          txArray[6] / txs,
          txArray[7] / txs,
          txArray[8] / txs,
          txArray[9] / txs,
          txArray[10] / txs,
          txArray[11] / txs,
          txArray[12] / txs,
          txArray[13] / txs,
          txArray[14] / txs,
          txArray[15] / txs,
          txArray[16] / txs,
          txArray[17] / txs,
          txArray[18] / txs,
          txArray[19] / txs,
          txArray[20] / txs,
          txArray[21] / txs,
          txArray[22] / txs,
          txArray[23] / txs,
          txArray[24] / txs,
          txArray[25] / txs,
          txArray[26] / txs,
          txArray[27] / txs,
          txArray[28] / txs,
          txArray[29] / txs,
          txArray[30] / txs,
          txArray[31] / txs,
          txArray[32] / txs,
          txArray[33] / txs,
          txArray[34] / txs,
          txArray[35] / txs,
          txArray[36] / txs,
          txArray[37] / txs,
          txArray[38] / txs,
          txArray[39] / txs,
          txArray[40] / txs,
          txArray[41] / txs,
          txArray[42] / txs,
          txArray[43] / txs,
          txArray[44] / txs,
        ],
      },
    ],
  };

  return (
    <div className="lineC">
      <Bar
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
                  max: 0.5,
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

export default BarChart;
