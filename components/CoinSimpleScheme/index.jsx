import React from 'react'
import { CoinStyledScheme } from './styled'
import { Avatar, Typography, Card, CardActionArea } from '@mui/material'

export const CoinSimpleScheme = ({ icon, name, code, price, chart, precentage }) => {
    return (
        <CoinStyledScheme>

            <Card>
                <CardActionArea>
                    <Avatar src={icon} alt='coin logo' />
                    <div className='name'>
                        <Typography variant='body1'>{name}</Typography>
                        <Typography variant='body2'>{code}</Typography>
                    </div>
                    <Typography>Chart</Typography>
                    <div className='price'>
                        <Typography>{price}$</Typography>
                        <Typography>{precentage}%</Typography>
                    </div>
                </CardActionArea>
            </Card >
        </CoinStyledScheme>
    )
}
