import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { normArrayToDisplay } from "../functions/FaDO.js";

export default function HisChart() {
  const [norm, setNorm] = useState(normArrayToDisplay);
  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setNorm((prevCount) => normArrayToDisplay);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);

  const state = {
    labels: [0, 1.57, 1.58, 1.59, 1.6, 1.61, 1.62, 1.63, 1.64, 1.65, 1.66, 3],
    datasets: [
      {
        label: "Norm of the last 1000 TXs",
        backgroundColor: [
          "rgba(118, 190, 254, 0.529)",
          "rgba(118, 190, 254, 0.529)",
          "rgba(118, 190, 254, 0.529)",
          "rgba(118, 190, 254, 0.529)",
          "rgba(118, 190, 254, 0.529)",
          "rgba(118, 190, 254, 0.529)",
          "rgba(118, 190, 254, 0.529)",
          "rgba(118, 190, 254, 0.529)",
          "rgba(118, 190, 254, 0.529)",
          "rgba(247, 123, 123, 0.632)",
          "rgba(247, 123, 123, 0.632)",
        ],
        borderColor: "rgb(10, 41, 87)",
        pointBackgroundColor: "rgb(132, 180, 252)",
        borderWidth: 0,
        pointBorderColor: "rgb(132, 180, 252)",
        barPercentage: 1.22,

        // Data for the x-axis of the chart
        data: [
          norm[0],

          norm[1],

          norm[2],

          norm[3],

          norm[4],

          norm[5],

          norm[6],

          norm[7],

          norm[8],

          norm[9],

          norm[10],
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
                  max: 700,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
            xAxes: [
              {
                display: false,

                ticks: {
                  max: 1.66,
                },
              },
              {
                display: true,
                ticks: {
                  autoSkip: false,
                  max: 3,
                },
                gridLines: {
                  display: true,
                  color: [
                    "wite",
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                    "white",
                    "red",
                    "white",
                    "white",
                  ],
                  borderDash: [15, 3, 3, 3],
                },
              },
            ],
          },
        }}
      />
    </div>
  );
}
