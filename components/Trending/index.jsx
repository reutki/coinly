import React from 'react'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { StyledTrendingLayout } from './styled'
import { CoinSimpleScheme } from '../CoinSimpleScheme'
import axios from 'axios'

//values 
//ath_change_percentage - prenectage 
//name - name
//image - icon
//symbol - symbol
//price_change_percentage_24h - 24h pricechange
//market_cap_rank - ranking 
//id - id


export const Trending = () => {
  const [coins, setCoins] = useState('');

  useEffect(() => {
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
      .then((response) => setCoins(response.data))
      .catch((error) => console.error(error))
  })
  console.log(coins)
  // function rendercoins() {
  //   coins.forEach((element) => {
  //     return (
  //       <CoinSimpleScheme price={coins.price_change_percentage_24h} precentage={coins.ath_change_percentage} icon={coins.image} />
  //     )
  //   })
  // }
  return (
    < StyledTrendingLayout >
      <Typography variant="body1" fontWeight={700}>Trending Coins</Typography>
      {coins ? coins.map(coin => {
        return (
          <CoinSimpleScheme
            key={coin.id}
            icon={coin.image}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.current_price}
            precentage={coin.price_change_percentage_24h}
          />

        )
      }) : null}
    </ StyledTrendingLayout>
  )
}
