import 'normalize.css'
import { AppStyle } from './StyledApp';
import { BottomNavigation,BottomNavigationAction } from '@mui/material';
// import {TrendingUpIcon,CurrencyExchangeIcon,AccountCircleIcon} from '@mui/icons-material'
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useState } from 'react';
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
      <BottomNavigationAction
        label="Trending"
        value="trending"
        icon={<TrendingUpIcon />}
      />

      <BottomNavigationAction
        label="Exchange"
        value="exchange"
        icon={<CurrencyExchangeIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<AccountCircleIcon />}
      />
  </BottomNavigation>
      </AppStyle>
  )
}

export default App
