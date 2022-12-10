import React from 'react'
import { useEffect, useState } from 'react'
import { Typography } from '@mui/material'
import { StyledTrendingLayout } from './styled'
import { CoinSimpleScheme } from '../CoinSimpleScheme'
import axios from 'axios'
import { useGetCryptosQuery } from '../../src/services/RapidAPI'

//values 
//ath_change_percentage - prenectage 
//name - name
//image - icon
//symbol - symbol
//price_change_percentage_24h - 24h pricechange
//market_cap_rank - ranking 
//id - id




export const Trending = () => {
  const { data, isLoading } = useGetCryptosQuery();
  console.log(data)
  const coins = data?.data?.coins
  console.log(coins)

  return (
    < StyledTrendingLayout >
      <Typography variant="body1" fontWeight={700}>Trending Coins</Typography>
      {coins ? coins.map(coin => {
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
      }) : null}
    </ StyledTrendingLayout>
  )
}
