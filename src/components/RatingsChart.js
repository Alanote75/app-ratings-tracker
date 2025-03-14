import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const RatingsChart = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch("/public/data.json")
      .then(response => response.json())
      .then(data => {
        const dates = data.history.map(entry => entry.date);
        const androidRatings = data.history.map(entry => entry.ratings.android);
        const iosRatings = data.history.map(entry => entry.ratings.ios);

        setChartData({
          labels: dates,
          datasets: [
            {
              label: "Android",
              data: androidRatings,
              borderColor: "blue",
              fill: false
            },
            {
              label: "iOS",
              data: iosRatings,
              borderColor: "green",
              fill: false
            }
          ]
        });
      });
  }, []);

  return (
    <div>
      <h2>Évolution des Notes</h2>
      {chartData ? <Line data={chartData} /> : <p>Chargement...</p>}
    </div>
  );
};

export default RatingsChart;
