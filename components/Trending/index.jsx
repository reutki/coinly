import { React, useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { StyledTrendingLayout } from './styled'
import { CoinSimpleScheme } from '../CoinSimpleScheme'
import { useGetCryptosQuery, useGetMarketsQuery } from '../../src/services/RapidAPI'
import { useGetHistoryQuery } from '../../src/services/GetHistory'
import { Tab, Tabs } from '@mui/material'

export const Trending = () => {
  const { data: cryptosData, error: cryptosError, isLoading: cryptosIsLoading } = useGetCryptosQuery({
    // Additional query options for the /coins endpoint here
  });
  const { data: marketData, error: marketError, isLoading: marketIsLoading } = useGetHistoryQuery({
    // Additional query options for the /coins endpoint here
  });


  const coins = cryptosData?.data?.coins
  const [tab, setTab] = useState(0);
  const handleChange = (event, value) => {
    console.log(marketData)
    setTab(value);
  };
  return (
    < StyledTrendingLayout >
      <Typography variant="body1" fontWeight={700}>Trending Coins</Typography>
      <Tabs value={tab} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="Top 10" value={0} />
        <Tab label="Top 100" value={1} />
        <Tab label="Markets" value={2} />
      </Tabs>
      {
        tab == 0 && coins ? coins.slice(0, 10).map(coin => {
          return (
            <CoinSimpleScheme
              rank={coin.rank}
              key={coin.uuid}
              icon={coin.iconUrl}
              name={coin.name}
              price={coin.price}
              precentage={coin.change}
            />

          )
        }) : null
      }
      {
        tab == 1 && coins ? coins.map(coin => {
          return (
            <CoinSimpleScheme
              rank={coin.rank}
              key={coin.uuid}
              icon={coin.iconUrl}
              name={coin.name}
              // symbol={coin.symbol}
              price={coin.price}
              precentage={coin.change}
            />

          )
        }) : null
      }
    </ StyledTrendingLayout >
  )
}
