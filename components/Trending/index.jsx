import React, { useState, useEffect, useMemo, memo } from "react";
import { Typography } from "@mui/material";
import { StyledTrendingLayout, StyledLoading } from "./styled";
import { CoinCard } from "../CoinCard";
import { useGetCryptosQuery } from "../../src/services/RapidAPI";
import { Tab, Tabs } from "@mui/material";
import { Button, Loading, Text } from "@nextui-org/react";
import { Profile } from "../Profile";
import { Search } from "../Search";
import {
  useGetFavoritesQuery,
  useAddFavoritesMutation,
  useRemoveFavoritesMutation,
} from "../../src/services/FavoritesApi";

export const Trending = () => {
  const [period, setPeriod] = useState("30d");
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(10);
  const [loadedCoins, setLoadedCoins] = useState([]);
  const {
    data: cryptosData,
    error: cryptosError,
    isLoading: cryptosIsLoading,
  } = useGetCryptosQuery(period);
  const coins = cryptosData?.data?.coins;
  const username = localStorage.getItem("username");
  const favoritesHook = useGetFavoritesQuery({ username: username });
  const favorites = favoritesHook?.data?.map((item) => item.uuid).join(",");

  const MemoizedCoinCard = useMemo(() => memo(CoinCard), []);

  const CoinsCards = useMemo(() => {
    return loadedCoins.map((coin) => (
      <MemoizedCoinCard
        key={coin.uuid}
        rank={coin.rank}
        uuid={coin.uuid}
        icon={coin.iconUrl}
        name={coin.name}
        price={coin.price}
        precentage={coin.change}
        sparkline={coin.sparkline}
        username={username}
        setPeriod={setPeriod}
        favorites={favorites} // Pass the favorites prop here
        favoritesHook={favoritesHook}
      />
    ));
  }, [loadedCoins, favorites, favoritesHook]);

  useEffect(() => {
    if (coins) {
      setLoadedCoins(coins.slice(start, end));
    }
  }, [coins, start, end]);

  if (!coins) {
    return (
      <StyledLoading>
        <Loading size="lg" />
      </StyledLoading>
    );
  }

  if (cryptosError) {
    return <p>Error: {cryptosError.message}</p>;
  }

  return (
    <StyledTrendingLayout>
      <Text h1>Trending</Text>
      <div className="top_bar_trending">
        <Button.Group
          className="buttongroup"
          bordered
          color="primary"
          size={
            window.innerWidth < 320
              ? "xs"
              : window.innerWidth < 425
                ? "sm"
                : window.innerWidth < 768
                  ? "md"
                  : window.innerWidth < 1024
                    ? "lg"
                    : window.innerWidth > 1024
                      ? "xl"
                      : "xl"
          }
        >
          <Button value={"24h"} onPress={() => setPeriod("24h")}>
            24h
          </Button>
          <Button value={"30d"} onPress={() => setPeriod("30d")}>
            30d
          </Button>
          <Button value={"3m"} onPress={() => setPeriod("3m")}>
            3m
          </Button>
          <Button value={"1y"} onPress={() => setPeriod("1y")}>
            1y
          </Button>
        </Button.Group>
        <div className="search">
          <Search />
        </div>
        <Profile className="trendingprofile" />
      </div>
      {loadedCoins.length > 0 && <>{CoinsCards}</>}
      {end < coins.length && (
        <Button className="loadButton"
          onPress={() => {
            setStart(0);
            setEnd(end + 10);
          }}
        >
          Load more
        </Button>
      )}
    </StyledTrendingLayout>
  );
};
