import React from 'react'
import { CoinStyledScheme } from './styled'
import { Avatar, Typography, Card, CardActionArea } from '@mui/material'


export const CoinSimpleScheme = (icon, price, chart, precentage) => {
    return (
        <CoinStyledScheme>

            <Card>
                <CardActionArea>
                    <Avatar src='#' alt='coin logo' />
                    <div className='name'>
                        <Typography variant='body1'>Bitcoin</Typography>
                        <Typography variant='body2'>BTC</Typography>
                    </div>
                    <Typography>Chart</Typography>
                    <div className='price'>
                        <Typography>200$</Typography>
                        <Typography>20%</Typography>
                    </div>
                </CardActionArea>
            </Card >
        </CoinStyledScheme>
    )
}
