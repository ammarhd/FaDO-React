import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { w } from "../functions/FaDO";

function LineChart() {
  const [W, setW] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setW((prevCount) => w);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);

  const labelCount = () => {
    var labelArray = Array.from(Array(W.length), () => 0.0);
    for (let i = 0; i < W.length; i++) {
      labelArray[i] = i;
    }
    return labelArray;
  };

  const state = {
    labels: labelCount(),
    datasets: [
      {
        label: "Current values of W",
        backgroundColor: "rgb(168, 233, 240)",
        borderColor: "rgb(12, 70, 77)",
        borderWidth: 1,
        // Data for the x-axis of the chart
        data: W,
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
