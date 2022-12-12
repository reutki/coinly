import { React, useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { StyledTrendingLayout } from './styled'
import { CoinSimpleScheme } from '../CoinSimpleScheme'
import { useGetCryptosQuery, useGetMarketsQuery } from '../../src/services/RapidAPI'
import { Tab, Tabs } from '@mui/material'

export const Trending = () => {
  const { data, isLoading } = useGetCryptosQuery();
  const { markets, isLoadingMarkets } = useGetMarketsQuery();
  const coins = data?.data?.coins
  const [tab, setTab] = useState(0);

  const handleChange = (event, value) => {
    setTab(value);
    console.log(markets)
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
              // symbol={coin.symbol}
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
