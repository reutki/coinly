import React, { useEffect } from "react";
import { useGetFavoritesQuery } from "../../src/services/FavoritesApi";
import { CoinCard } from "../CoinCard";
import { useGetFilteredCoinDataMutation } from "../../src/services/RapidAPI";
import { Button, Text, Loading } from "@nextui-org/react";
import { StyledLoading } from "../Trending/styled";

const Favorites = () => {
    const username = localStorage.getItem("username");
    const favoritesHook = useGetFavoritesQuery({ username: username });
    const [getFavoriteCoins, { data: favoriteCoins }] =
        useGetFilteredCoinDataMutation();
    const uuids = favoritesHook?.data?.map((item) => item.uuid).join(",");
    const coins = favoriteCoins?.data?.coins;




    useEffect(() => {
        if (uuids) {
            getFavoriteCoins(uuids);
        }
    }, [uuids]);



    return (
        <div>
            <Text h1>Favorites:</Text>
            {coins &&
                coins.map((item) => (
                    <CoinCard
                        key={item.uuid}
                        icon={item.iconUrl}
                        name={item.name}
                        rank={item.rank}
                        precentage={item.change}
                        sparkline={item.sparkline}
                        uuid={item.uuid}
                        price={item.price}
                        favorites={uuids}
                        favoritesHook={favoritesHook}
                    />
                ))}
            {!coins ?
                <StyledLoading>
                    <Loading size="lg" />
                </StyledLoading>

                : null}
        </div>
    );
};

export default Favorites;
