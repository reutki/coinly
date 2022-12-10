import { Input, Select, Typography, MenuItem, Autocomplete, TextField } from '@mui/material'
import { React, useState } from 'react'
import { ExchangeStyle, DialPad } from './styled'
import axios from 'axios'
import { CoinSimpleScheme } from '../CoinSimpleScheme'

export const Exchange = () => {
  const [fiat, setFiat] = useState('')
  const [crypto, setCrypto] = useState('')

  axios.get('https://api.coingecko.com/api/v3/simple/supported_vs_currencies')
    .then((response) => setFiat(response.data))
    .catch((error) => console.error(error))
  axios.get("https://api.coingecko.com/api/v3/coins/list")
    .then((response) => setCrypto(response.data))
    .catch((error) => console.error(error))

  return (
    <ExchangeStyle>
      <Typography variant='body1' fontWeight={700}>Exchange</Typography>
      <Input />
      <Select >

        {crypto ? crypto.map(coin => {
          return (
            <MenuItem value={`${coin.id}`}>{coin.id}</MenuItem>
          )
        }
        ) : null}
      </Select>
      {crypto !== '' ? (
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={crypto.id}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Coins" />}
        />
      ) : null
      }
      <Select >
        {fiat ? fiat.map(paper => {
          return (
            <MenuItem value={paper}>{paper}</MenuItem>
          )
        }
        ) : null}
      </Select>
    </ExchangeStyle >
  )
}
