import { Card, Input } from "@nextui-org/react";
import { Modal, useModal } from "@nextui-org/react";
import SearchIcon from '@mui/icons-material/Search';
import { searchApi, useGetSearchMutation } from "../../src/services/SearchApi";
import { useState, useEffect } from "react";
import { CoinCard } from "../CoinCard";
import { SearchCard } from "../SearchCard";
import { useGetDataQuery } from "../../src/services/RapidAPI";
export const Search = () => {
    const { setVisible, bindings } = useModal();
    const [inputValue, setInputValue] = useState('');
    const [getSearch, { data: coins }] = useGetSearchMutation();
    const [search, setSearch] = useState(true)
    const result = coins?.data?.coins;
    const [selectedCoin, setSelectedCoin] = useState(null);

    const data = useGetDataQuery(selectedCoin?.uuid)
    const coin = data?.data?.data?.coin;
    console.log(data?.data?.data?.coin)
    useEffect(() => {
        if (inputValue) {
            getSearch(inputValue);
        }
    }, [inputValue]);

    const handleCardClick = (uuid) => {
        console.log("Clicked coin UUID:", uuid);
        const selectedCoin = result.find((coin) => coin.uuid === uuid);
        setSelectedCoin(selectedCoin);
        setSearch(false)
    };
    return (
        <>

            <SearchIcon fontSize='large' onClick={() => setVisible(true)} />
            <Modal fullScreen closeButton {...bindings}>
                <Modal.Body>
                    <>
                        <Input label="Search Coin" fullWidth onChange={(e) => { setInputValue(e.target.value); setSearch(true) }} />
                    </>
                    {search && result?.map((coin) => (
                        <div key={coin.uuid} onClick={() => handleCardClick(coin.uuid)}>
                            <SearchCard
                                rank={coin.rank}
                                uuid={coin.uuid}
                                icon={coin.iconUrl}
                                name={coin.name}
                                price={coin.price}
                            />
                        </div>
                    ))}
                    {coin && !search ?
                        <CoinCard
                            key={coin?.uuid}
                            rank={coin?.rank}
                            uuid={coin?.uuid}
                            icon={coin?.iconUrl}
                            name={coin?.name}
                            price={coin?.price}
                            precentage={coin?.change}
                            sparkline={coin?.sparkline}
                            isSearch={true}

                        />
                        : null
                    }
                </Modal.Body>
            </Modal>

        </>
    );
};