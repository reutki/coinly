import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'


export const LineChart = ({ chartData }) => {
    return (
        <Line data={{
            labels: price => { return (<span></span>) },
            datasets: [chartData]
        }
        } width={100} height={100} />
    )
}
