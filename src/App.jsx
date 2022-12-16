import 'normalize.css'
import { AppStyle } from './StyledApp';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState, useEffect } from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import { Profile } from '../components/Profile/index'
import { Trending } from '../components/Trending/index'
import { Exchange } from '../components/Exchange/index'
import axios from 'axios';


function App() {
  const [value, setValue] = useState("trending");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppStyle >
      <BottomNavigation
        value={value}
        onChange={handleChange}>
        <Link to='/'>
          <BottomNavigationAction
            label="Trending"
            value="trending"
            icon={<TrendingUpIcon />}
          />
        </Link>

        <Link to='/exchange'>

          <BottomNavigationAction
            label="Exchange"
            value="exchange"
            icon={<CurrencyExchangeIcon />}
          /></Link>
        <Link to='/profile'>

          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<AccountCircleIcon />}
          />
        </Link>
      </BottomNavigation>
      <Routes>
        <Route path='/' element={<Trending />} />
        <Route path='/exchange' element={<Exchange />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='*' element={<Trending />} />
      </Routes>

    </AppStyle>
  )
}

export default App
