import React from 'react'
import { Chart as ChartJS } from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { ChartStyles } from './styled'
// import { LineChart, Line } from 'recharts';



export const LineChart = ({ chartData, isMinimized }) => {
    return (
        <ChartStyles>
            <Line className='chartMinimized' options={{
                scales: {
                    x: {
                        display: isMinimized ? false : true
                    },
                    y: {
                        display: isMinimized ? false : true
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    }
                }
            }} data={{
                labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28],
                datasets: [
                    {
                        data: [...chartData],
                        fill: false,
                        lineTension: 0.1,
                        backgroundColor: 'rgba(75,192,192,0.4)',
                        borderColor: 'rgba(75,192,192,1)',
                        borderCapStyle: 'butt',
                        borderDash: [],
                        borderJoinStyle: 'miter',
                        pointBorderColor: 'rgba(75,192,192,1)',
                        pointBackgroundColor: '#fff',
                        pointBorderWidth: 1,
                        pointHoverRadius: 5,
                        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                        pointHoverBorderColor: 'rgba(220,220,220,1)',
                        pointHoverBorderWidth: 2,
                        pointRadius: isMinimized ? 1 : 4,
                        pointHitRadius: 10,
                    }
                ]
            }}
            />
        </ChartStyles>
    )
}
