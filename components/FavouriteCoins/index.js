import { React, useState, useEffect } from "react";
import { Typography } from "@mui/material";
import { StyledTrendingLayout } from "./styled";
import { CoinCard } from "../CoinCard";
import { useGetCoinByIdQuery } from "../../src/services/RapidAPI";
import {
  useUpdateFavoriteCoinsMutation,
  useGetFavoriteCoinsQuery,
} from "../../src/services/BackendAPI";

const FavoriteCoins = ({ userId }) => {
  const [favoriteCoins, setFavoriteCoins] = useState([]);
  const {
    data: favoriteCoinsData,
    error: favoriteCoinsError,
    isLoading: favoriteCoinsIsLoading,
  } = useGetFavoriteCoinsQuery(userId);
  const { mutate: updateFavoriteCoins } = useUpdateFavoriteCoinsMutation();

  const handleToggleFavorite = (coinId) => {
    const isFavorite = favoriteCoins.includes(coinId);
    const updatedFavoriteCoins = isFavorite
      ? favoriteCoins.filter((id) => id !== coinId)
      : [...favoriteCoins, coinId];
    setFavoriteCoins(updatedFavoriteCoins);
    updateFavoriteCoins({ userId, favoriteCoins: updatedFavoriteCoins });
  };

  useEffect(() => {
    if (favoriteCoinsData) {
      setFavoriteCoins(favoriteCoinsData.favoriteCoins);
    }
  }, [favoriteCoinsData]);

  const {
    data: coinsData,
    error: coinsError,
    isLoading: coinsIsLoading,
  } = useGetCryptosQuery("24h");
  const coins = coinsData?.data?.coins;

  if (coinsIsLoading || favoriteCoinsIsLoading) {
    return <div>Loading...</div>;
  }

  if (coinsError || favoriteCoinsError) {
    return <div>Error</div>;
  }

  const favoriteCoinCards = coins
    .filter((coin) => favoriteCoins.includes(coin.uuid))
    .map((coin) => (
      <CoinCard
        key={coin.uuid}
        rank={coin.rank}
        uuid={coin.uuid}
        icon={coin.iconUrl}
        name={coin.name}
        price={coin.price}
        precentage={coin.change}
        sparkline={coin.sparkline}
        onToggleFavorite={handleToggleFavorite}
        isFavorite={favoriteCoins.includes(coin.uuid)}
      />
    ));

  return (
    <StyledTrendingLayout>
      <Typography variant="body1" fontWeight={700}>
        Favorite Coins
      </Typography>
      {favoriteCoinCards}
    </StyledTrendingLayout>
  );
};

export default FavoriteCoins;
