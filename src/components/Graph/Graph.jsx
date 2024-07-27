import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import "./Graph.css";

const Graph = ({ allSessions }) => {
  const sessionLabels = allSessions.map(
    (session, index) => `Session ${index + 1}`
  );
  const sessionData = allSessions.map(
    (session) => session.endBalance - session.startBalance
  );

  const data = {
    labels: sessionLabels,
    datasets: [
      {
        label: "Profit",
        data: sessionData,
        fill: false,
        backgroundColor: "rgba(46, 204, 113, 1)",
        borderColor: "rgba(46, 204, 113, 1)",
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="graph">
      <h2>Graph</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default Graph;
