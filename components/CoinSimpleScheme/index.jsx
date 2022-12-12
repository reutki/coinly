import { React, useState } from 'react'
import { CoinStyledScheme } from './styled'
import { Avatar, Typography, Card, CardActionArea, Collapse, Button, IconButton, CardContent } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { styled } from '@mui/material/styles';
import millify from 'millify';


export const CoinSimpleScheme = ({ icon, name, code, price, chart, precentage, rank }) => {
    const newPrice = Number(price).toFixed(2)
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => { setExpanded(!expanded) };
    return (
        <CoinStyledScheme>
            <Card onClick={handleExpandClick}>
                <CardActionArea>
                    <Avatar src={icon} alt='coin logo' />
                    <div className='name'>
                        <Typography variant='body1'>{rank}</Typography>
                        <Typography variant='body1'>{name}</Typography>
                        <Typography variant='body2'>{code}</Typography>
                    </div>
                    <Typography>Chart</Typography>
                    <div className='price'>
                        <Typography>{millify(newPrice)}$</Typography>
                        <Typography>{millify(precentage)}%</Typography>
                    </div>
                </CardActionArea>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography>Chart Here</Typography>
                    </CardContent>
                </Collapse>
            </Card >
        </ CoinStyledScheme>
    )
}
