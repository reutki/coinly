import { Typography } from '@mui/material'
import React from 'react'
import { StyledTrendingLayout } from './styled'
import { CoinSimpleScheme } from '../CoinSimpleScheme'

export const Trending = () => {
  return (
    <StyledTrendingLayout>
      <Typography variant="body1" fontWeight={700}>Trending Coins</Typography>
      <CoinSimpleScheme />
    </StyledTrendingLayout>
  )
}
