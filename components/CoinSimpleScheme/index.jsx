import { React, useState } from 'react'
import { CoinStyledScheme } from './styled'
import { Avatar, Typography, Card, CardActionArea, Collapse, Button, IconButton, CardContent } from '@mui/material'
import { ExpandMore } from '@mui/icons-material'
import { styled } from '@mui/material/styles';


export const CoinSimpleScheme = ({ icon, name, code, price, chart, precentage, rank }) => {
    const newPrice = Number(price).toFixed(2)
    const [expanded, setExpanded] = useState(false);
    const ExpandMoreButton = styled((props) => {
        const { expand, ...other } = props;
        return <IconButton {...other} />;
    })(({ theme, expand }) => ({
        transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    }));

    const handleExpandClick = () => { setExpanded(!expanded) };
    return (
        < CoinStyledScheme >
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
                        <Typography>{newPrice}$</Typography>
                        <Typography>{precentage}%</Typography>
                    </div>
                </CardActionArea>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>
                        <Typography >Chart Here</Typography>
                    </CardContent>
                </Collapse>
            </Card >
        </ CoinStyledScheme>
    )
}
