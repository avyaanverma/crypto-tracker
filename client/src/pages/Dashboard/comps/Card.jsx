import React from 'react';
import { CategoryScale } from "chart.js";
import { Data } from "./Data";
import Chart from "chart.js/auto";
import { useState } from "react";
import LineChart from "./LineChart";
import PieChart from './PieChart';

Chart.register(CategoryScale);

const Card = ({coin}) => {
    const [chartData, setChartData] = useState({
        name: coin,
        labels: Data.map((data) => data.year), 
        datasets: [
          {
            label: "Users Gained ",
            data: Data.map((data) => data.userGain),
            backgroundColor: [
                "rgba(75,192,192,1)",
                "#ecf0f1",
                "#50AF95",
                "#f3ba2f",
                "#2a71d0"
              ],
            borderColor: "black",
            borderWidth: 2
          }
        ]
      });

    return (
        <div className='card'>
            <LineChart chartData={chartData} />
            {/* <PieChart chartData={chartData} /> */}
        </div>
    );
};

export default Card;