import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export function Navigation() {
  const [value, setValue] = React.useState("trending");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: 500}}
      value={value}
      onChange={handleChange}
    >
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
  );
}
