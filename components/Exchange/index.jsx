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
  const [have, setHave] = useState('btc');
  const [get, setGet] = useState('usd');
  const [result, setResult] = useState(null);
  const { data: coins, isLoading: coinsLoading } = useGetVSCoinsQuery();
  const response = [have, get]
  const { data: exchange, isLoading: exchangeLoading } = useGetExchangeQuery(response);
  const handleHave = (event) => {
    setHave(event.target.value);
  };
  const handleGet = (event) => {
    setGet(event.target.value)
  }
  useEffect(() => {
    if (exchange !== null && exchange !== undefined && exchange !== '' && !exchangeLoading) {

      setResult(exchange)

    }
  }, [get, have])


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
        <Typography variant='body1' className='recieve'>
          {exchange !== null && exchange !== undefined && exchange !== '' ? Object.values(exchange)[0] : null}
        </Typography>
      </Paper >
    </ExchangeStyle >
  )
}
