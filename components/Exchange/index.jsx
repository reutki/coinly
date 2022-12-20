import { Input, Select, Typography, MenuItem, Autocomplete, TextField, Paper, ListSubheader } from '@mui/material'
import { React, useState, useEffect } from 'react'
import { ExchangeStyle, IconWrapper } from './styled'
import axios from 'axios'
import { CoinSimpleScheme } from '../CoinSimpleScheme'
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import { useGetCoinsQuery, useGetVSCoinsQuery } from '../../src/services/ExchangeApi'
import { useGetExchangeQuery } from '../../src/services/CoinsApi'

export const Exchange = () => {
  const [amount, setAmount] = useState(0)
  const [have, setHave] = useState('');
  const [get, setGet] = useState('');
  const [result, setResult] = useState(null);
  const { data: coins, isLoading: coinsLoading } = useGetVSCoinsQuery();
  const { data: exchange, isLoading: exchangeLoading } = useGetExchangeQuery(have, get);
  console.log(exchange)



  const handleHave = (event) => {
    setHave(event.target.value);
  };
  const handleGet = (event) => {
    setGet(event.target.value)
  }


  return (
    <ExchangeStyle>
      <Typography variant='body1' fontWeight={700}>Exchange</Typography>
      <Paper className='send_paper'>
        <Typography variant='caption'>I Have:</Typography>
        <Select value={have} onChange={handleHave}>
          {coins ? coins.map((coin, index) => {
            return (
              <MenuItem value={coin} key={index}>{coin}</MenuItem>

            )
          }) : null}

        </Select>
        <Input disableUnderline={true} type='number' className='send' value={amount} onChange={e => setAmount(e.target.value)} />
      </Paper>
      <IconWrapper>
        <ChangeCircleIcon fontSize='large' />
      </IconWrapper>
      <Paper className='recieve_paper'>
        <Typography variant='caption'>I Want:</Typography>
        <Select value={get} onChange={handleGet}>
          {coins ? coins.map((coin, index) => {
            return (
              <MenuItem value={coin} key={index}>{coin}</MenuItem>

            )
          }) : null}

        </Select>
        <Input disableUnderline={true} type='number' className='recieve' />
      </Paper >
    </ExchangeStyle >
  )
}
