import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { normArrayToDisplay } from "../functions/FaDO/arrayOfNorm";
import { setThreshold, x_axis } from "../functions/FaDO";
import { useForm } from "react-hook-form";

export default function HisChart() {
  const { register, handleSubmit } = useForm();

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
    labels: [
      x_axis[0],
      x_axis[1],
      x_axis[2],
      x_axis[3],
      x_axis[4],
      x_axis[5],
      x_axis[6],
      x_axis[7],
      x_axis[8],
      x_axis[9],
      x_axis[10],
      x_axis[11],
    ],
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
        barPercentage: 1.3,

        // Data for the x-axis of the chart
        data: norm,
      },
    ],
  };

  const onSubmit = (data, e) => {
    var num = parseFloat(data.Threshold);
    if (Number.isFinite(num)) {
      setThreshold(num);
    }
    e.target.reset();
  };

  return (
    <div className="lineC">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Threshold Value"
            name="Threshold"
            ref={register({ required: true })}
          />
          <button type="submit" id="close" className="btn btn-primary">
            ADD
          </button>
        </div>
      </form>

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
                  max: 1.9,
                },
              },
              {
                display: true,
                ticks: {
                  autoSkip: true,
                  max: 3,
                },
                gridLines: {
                  display: true,
                  color: [
                    "gray",
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
