import { React, useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { StyledTrendingLayout } from './styled'
import { CoinSimpleScheme } from '../CoinSimpleScheme'
import { useGetCryptosQuery, useGetMarketsQuery } from '../../src/services/RapidAPI'
import { useGetHistoryQuery } from '../../src/services/GetHistory'
import { Tab, Tabs } from '@mui/material'
import { ButtonGroup, Button } from '@mui/material'
// import { ChartData, ChartOptions } from 'chart.js'

export const Trending = () => {
  const [period, setPeriod] = useState('24h')
  const { data: cryptosData, error: cryptosError, isLoading: cryptosIsLoading } = useGetCryptosQuery(period);
  const coins = cryptosData?.data?.coins;
  const [tab, setTab] = useState(0);
  const handleChange = (event, value) => {
    setTab(value);
  };
  console.log(coins)
  return (
    < StyledTrendingLayout >
      <Typography variant="body1" fontWeight={700}>Trending Coins</Typography>
      <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Top 10" value={0} />
        <Tab label="Top 100" value={1} />
        <Tab label="Markets" value={2} />
      </Tabs>
      <ButtonGroup>
        <Button onClick={() => setPeriod('30d')}>30d</Button>
        <Button onClick={() => setPeriod('3m')}>3m </Button>
        <Button onClick={() => setPeriod('1y')}>1y</Button>
        <Button onClick={() => setPeriod('5y')}>5y</Button>
      </ButtonGroup>
      {

        tab == 0 && coins ? coins.slice(0, 10).map((coin, index) => {

          return (
            <CoinSimpleScheme
              rank={coin.rank}
              uuid={coin.uuid}
              icon={coin.iconUrl}
              name={coin.name}
              price={coin.price}
              precentage={coin.change}
              sparkline={coin.sparkline}
            />

          )
        }) : null
      }
      {
        tab == 1 && coins ? coins.map((coin, index) => {
          return (
            <CoinSimpleScheme
              period={period}
              rank={coin.rank}
              uuid={coin.uuid}
              icon={coin.iconUrl}
              name={coin.name}
              price={coin.price}
              precentage={coin.change}
              sparkline={coin.sparkline}
            />

          );

        }) : null
      }
    </ StyledTrendingLayout >
  )
}
