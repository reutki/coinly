import { Card, Input } from "@nextui-org/react";
import { Modal, useModal } from "@nextui-org/react";
import SearchIcon from '@mui/icons-material/Search';
import { useGetSearchMutation } from "../../src/services/SearchApi";
import { useState, useEffect } from "react";
import { CoinCard } from "../CoinCard";
import { SearchCard } from "../SearchCard";
export const Search = () => {
    const { setVisible, bindings } = useModal();
    const [inputValue, setInputValue] = useState('');
    const [getSearch, { data: coins }] = useGetSearchMutation();
    const result = coins?.data?.coins;
    console.log(result);
    const [selectedCoin, setSelectedCoin] = useState(null);

    useEffect(() => {
        if (inputValue) {
            getSearch(inputValue);
        }
    }, [inputValue]);

    const handleCardClick = (uuid) => {
        console.log("Clicked coin UUID:", uuid);
        const selectedCoin = result.find((coin) => coin.uuid === uuid);
        setSelectedCoin(selectedCoin);
        setVisible(true);
    };
    return (
        <>
            <SearchIcon onClick={() => setVisible(true)} />
            <Modal closeButton {...bindings}>
                <Modal.Body>
                    <>
                        <Input label="Search Coin" fullWidth onChange={(e) => setInputValue(e.target.value)} />
                    </>
                    {result?.map((coin) => (
                        <div key={coin.uuid} onClick={() => handleCardClick(coin.uuid)}>
                            <SearchCard
                                rank={coin.rank}
                                uuid={coin.uuid}
                                icon={coin.iconUrl}
                                name={coin.name}
                                price={coin.price}
                                handleCardClick={handleCardClick} // Pass the handleCardClick function to the SearchCard component
                            />
                        </div>
                    ))}
                </Modal.Body>
            </Modal>
            {selectedCoin && (
                <Modal onClick={() => setVisible(true)} onClose={() => setVisible(false)}>
                    <CoinCard
                        rank={selectedCoin.rank}
                        uuid={selectedCoin.uuid}
                        icon={selectedCoin.iconUrl}
                        name={selectedCoin.name}
                        price={selectedCoin.price}
                        isModal
                    />
                </Modal>
            )}
        </>
    );
};