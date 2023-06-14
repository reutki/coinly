//importing the MUI navigation
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
//importing the icons
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import WalletIcon from '@mui/icons-material/Wallet';
import FavoriteIcon from '@mui/icons-material/Favorite';
//importing the router 
import { Routes, Route, Link, NavLink } from 'react-router-dom'
//importing the items that should be rendered
import { Profile } from '../Profile/index'
import { Trending } from '../Trending/index'
import { Exchange } from '../Exchange/index'
import { News } from '../News';
import Favorites from '../Favorites';

const Navigation = ({ value, handleChange }) => {
  return (
    <div>
      <BottomNavigation sx={{ alignItems: 'center' }} showLabels value={value} onChange={handleChange}>
        <Link to="/">
          <BottomNavigationAction
            showLabel
            label="Trending"
            value="trending"
            icon={<TrendingUpIcon />}
          />
        </Link>
        <Link to="/favorites">
          <BottomNavigationAction
            showLabel
            label="Favorite"
            value="favorites"
            icon={<FavoriteIcon />}
          />
        </Link>
        <Link to="/exchange">
          <BottomNavigationAction
            showLabel
            label="Exchange"
            value="exchange"
            icon={<CurrencyExchangeIcon />}
          />
        </Link>
        <Link to="/news">
          <BottomNavigationAction
            showLabel
            label="News"
            value="news"
            icon={<NewspaperIcon />}
          />
        </Link>
      </BottomNavigation>
      <Routes>
        <Route path="/" element={<Trending />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<Trending />} />
      </Routes>
    </div>
  );
};

export default Navigation;
