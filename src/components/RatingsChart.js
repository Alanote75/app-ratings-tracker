import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const RatingsChart = () => {
  const [data, setData] = useState({ history: [] });

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const chartData = {
    labels: data.history.map((entry) => entry.date),
    datasets: [
      {
        label: "Android",
        data: data.history.map((entry) => entry.android),
        borderColor: "blue",
        fill: false,
      },
      {
        label: "iOS",
        data: data.history.map((entry) => entry.ios),
        borderColor: "green",
        fill: false,
      },
    ],
  };

  return (
    <div>
      <h2>📊 Évolution des Notes</h2>
      <Line data={chartData} />
    </div>
  );
};

export default RatingsChart;
