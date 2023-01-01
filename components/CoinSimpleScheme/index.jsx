import { React, useState } from 'react'
import { CoinStyledScheme } from './styled'
import { Avatar, Typography, Card, CardActionArea, Collapse, Button, IconButton, CardContent, ButtonGroup } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import millify from 'millify';
import { useGetHistoryQuery } from '../../src/services/GetHistory';
import { Line } from 'react-chartjs-2';
import { LineChart } from '../Chart'



export const CoinSimpleScheme = ({ icon, period, name, code, price, key, sparkline, precentage, rank, uuid }) => {
    const newPrice = Number(price).toFixed(2)
    const [expanded, setExpanded] = useState(false);



    const handleExpandClick = () => {
        setExpanded(!expanded)
    };
    return (
        <CoinStyledScheme>
            <Card onClick={handleExpandClick} key={key}>
                <CardActionArea>
                    <Avatar src={icon} alt='coin logo' />
                    <div className='name'>
                        <Typography variant='body1'>{rank}</Typography>
                        <Typography variant='body1'>{key}</Typography>
                        <Typography variant='body1'>{name}</Typography>
                        <Typography variant='body2'>{code}</Typography>
                    </div>
                    <Line className='chartMinimized' options={{

                        scales: {
                            x: {
                                display: false

                            },
                            y: {
                                display: false
                            }
                        },
                        plugins: {
                            legend: {
                                display: false,
                            }

                        }


                    }} data={{
                        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
                        datasets: [
                            {
                                data: [...sparkline],
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
                                pointRadius: 1,
                                pointHitRadius: 10,
                            }
                        ]
                    }}





                        width={10} height={10} />
                    <div className='price'>
                        <Typography>{millify(newPrice)}$</Typography>
                        <Typography>{millify(precentage)}%</Typography>
                    </div>
                </CardActionArea>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        {expanded
                            ? <>
                                <Line className='chart' data={{
                                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
                                    datasets: [{
                                        data: [...sparkline],
                                        borderColor: 'red'


                                    }],
                                }
                                } options={{
                                    scales: {
                                        x: {
                                            display: false

                                        },
                                        // y: {
                                        //     display: false
                                        // }
                                    },
                                    plugins: {
                                        legend: {
                                            display: false,
                                        }

                                    }
                                }} width={10} height={10} />
                            </> : null}

                    </CardContent>
                </Collapse>

                `
            </Card >
        </ CoinStyledScheme>
    )
}
