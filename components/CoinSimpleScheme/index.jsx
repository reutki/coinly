import { React, useState, useEffect } from 'react'
import { CoinStyledScheme } from './styled'
import { Avatar, Typography, Card, CardActionArea, Collapse, Button, IconButton, CardContent, ButtonGroup, Link } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import millify from 'millify';
import { useGetDataQuery } from '../../src/services/RapidAPI';
import { Line } from 'react-chartjs-2';
import { LineChart } from '../Chart'
import DOMPurify from 'dompurify';



export const CoinSimpleScheme = ({ icon, period, name, code, price, key, sparkline, precentage, rank, uuid }) => {
    const handleExpandClick = () => {
        setExpanded(!expanded);
        if (expanded == false) {
            setCryptoData(uuid);
            console.log(cryptoData)
            console.log(coinData)
        }
    };
    const newPrice = Number(price).toFixed(2)
    const [cryptoData, setCryptoData] = useState(uuid);
    const { data: coinData, error, isLoading } = useGetDataQuery(cryptoData);

    const [expanded, setExpanded] = useState(false);
    const coinDetails = coinData?.data?.coin
    console.log(coinDetails)




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
                        <Typography sx={{ fontWeight: "bold" }} >{millify(newPrice)}$</Typography>
                        {precentage < 0 && precentage !== 0 ? <Typography sx={{ color: 'red' }} variant='body2'>{millify(precentage)}%</Typography> :
                            <Typography sx={{ color: 'green' }} variant='body2'>{millify(precentage, { precision: 3 })}%</Typography>}
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

                                    },
                                    plugins: {
                                        legend: {
                                            display: false,
                                        }

                                    }
                                }} width={10} height={10} />
                                {expanded == true && uuid !== undefined && uuid !== null ?
                                    <><Typography>Rank:{coinDetails?.rank}</Typography>
                                        <Typography>
                                            Current-Supply:{coinDetails?.supply?.circulating}
                                        </Typography>
                                        <Typography>
                                            Total-Supply:{coinDetails?.supply.total}
                                        </Typography>
                                        <Typography>
                                            CurrentPrice:{coinDetails?.price}
                                        </Typography>
                                        <Typography>
                                            Market Cap:{coinDetails?.marketCap}
                                        </Typography>
                                        <Typography>
                                            All Time High:{coinDetails?.allTimeHigh
                                            [0]} Date:{coinDetails?.allTimeHigh
                                            [1]}
                                        </Typography>
                                        <Typography>
                                            Description:<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coinDetails?.description) }}></p>
                                        </Typography>
                                        <Typography>
                                            Listed:{coinDetails?.listedAt}
                                        </Typography>
                                        <Typography>
                                            Name:{coinDetails?.listedAt}
                                        </Typography>
                                        <Typography>
                                            Price to BTC:{coinDetails?.btcPrice}
                                        </Typography>
                                        <Typography>
                                            Website:<Link>
                                                {coinDetails?.websiteUrl}
                                            </Link>
                                        </Typography>







                                    </>

                                    : null}


                            </> : null}


                    </CardContent>
                </Collapse>

                `
            </Card >
        </ CoinStyledScheme >
    )
}
