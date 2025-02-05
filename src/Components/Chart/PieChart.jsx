
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto"

const PieChart = ({ chartData }) => {
    return (
        <Bar
            data={chartData}
            height={100}
        />
    )
}

export default PieChart;
