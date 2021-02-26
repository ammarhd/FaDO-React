import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { averageTX } from "../functions/FaDO";

function BarChart() {
  const [txArray, setTxArray] = useState(averageTX);

  useEffect(() => {
    const interval = setInterval(() => {
      for (var j = 0; j < 100; j++) {
        setTxArray((prev) => averageTX);
      }
    }, 1);
    return () => clearInterval(interval);
  }, []);

  const labelCount = () => {
    var labelArray = Array.from(Array(txArray.length), () => 0.0);
    for (let i = 0; i < txArray.length; i++) {
      labelArray[i] = i;
    }
    return labelArray;
  };

  const state = {
    labels: labelCount(),
    datasets: [
      {
        label: "The average TX",
        backgroundColor: "rgb(244, 142, 223)",
        borderColor: "rgb(38, 2, 31)",
        pointBackgroundColor: "rgb(75, 7, 62)",
        borderWidth: 1,
        pointBorderColor: "rgb(75, 7, 62)",
        // Data for the x-axis of the chart
        data: txArray,
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
                  max: 1,
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
