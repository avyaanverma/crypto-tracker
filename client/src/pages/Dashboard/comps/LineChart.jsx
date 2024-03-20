import React from "react";
import { Line } from "react-chartjs-2";

// chartData is an object defined 
// in the Card component
function LineChart({ chartData}) {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>{chartData.name}</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
}
export default LineChart;