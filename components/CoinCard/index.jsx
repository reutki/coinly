import { React, useState, useEffect } from 'react'
import { CoinStyledScheme } from './styled'
import { Avatar, Link } from '@mui/material'
import millify from 'millify';
import { Card, Button, Modal, useModal, Text } from '@nextui-org/react';
import { useGetDataQuery } from '../../src/services/RapidAPI';
import DOMPurify from 'dompurify';
import { LineChart } from '../Chart';
import { useRemoveFavoritesMutation, useGetFavoritesQuery, useAddFavoritesMutation } from '../../src/services/FavoritesApi';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import BarChartIcon from '@mui/icons-material/BarChart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import LegendToggleIcon from '@mui/icons-material/LegendToggle';
import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoIcon from '@mui/icons-material/Info';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import LanguageIcon from '@mui/icons-material/Language';
export const CoinCard = ({ icon, name, price, sparkline, precentage, isSearch, favorites, favoritesHook, rank, uuid, setPeriod }) => {
    const newPrice = Number(price).toFixed(2);
    const { setVisible, bindings } = useModal();
    const [cryptoData, setCryptoData] = useState('');
    const { data: coinData } = useGetDataQuery(cryptoData);
    const [expanded, setExpanded] = useState(isSearch ? true : false);
    const coinDetails = coinData?.data?.coin;
    const [removeCoin] = useRemoveFavoritesMutation();
    const [addCoin] = useAddFavoritesMutation();

    const [favoriteItem, setFavoriteItem] = useState(favorites?.includes(uuid));


    const dateConverter = (date) => {
        const convertedDate = new Date(date * 1000).toDateString()
        return convertedDate
    }
    const handleExpandClick = () => {
        setVisible(true);
        setCryptoData(uuid);
        if (cryptoData !== null | undefined | '') {
            setExpanded(true);
        } else {
            setExpanded(false)
        }

    };
    useEffect(() => {
        setFavoriteItem(favorites?.includes(uuid));
    }, [favorites]);

    const handleRemoveFavorite = async () => {
        if (uuid) {
            await removeCoin(uuid).unwrap();
        }
        favoritesHook?.refetch();
    };

    const handleAddFavorite = async () => {
        if (uuid) {
            await addCoin(uuid).unwrap();
        }
        favoritesHook?.refetch();
    };


    return (
        <CoinStyledScheme>
            <Card
                fullScreen
                closeButton
                isPressable
                className='card-container'   >

                <Card.Body className='card-body' onClick={handleExpandClick}  >

                    <div className='name'>
                        <Text b>{rank}.</Text>
                        <Avatar src={icon} alt='coin logo' />
                        <Text h5>{name}</Text>
                    </div>
                    <div className='chart_container'>
                        <LineChart isMinimized chartData={sparkline} />
                    </div>
                    <div className='price'>
                        <Text b>{millify(newPrice)}$</Text>
                        {precentage < 0 && precentage !== 0 ? <Text className='precentage-price-down'>{millify(precentage)}%</Text> :
                            <Text className='precentage-price-up'>{millify(precentage, { precision: 3 })}%</Text>}
                    </div>
                </Card.Body>
                <Modal closeButton {...bindings} >
                    <Modal.Body className='CoinCardContent'>
                        {expanded && cryptoData !== null | undefined | ''
                            ? <>
                                <LineChart chartData={sparkline} />
                                {!isSearch &&

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
                                }

                                {favorites?.includes(uuid) && favoriteItem ?
                                    <Button onPress={handleRemoveFavorite} className='button-modal'>Remove from favorites</Button>
                                    :
                                    <Button onPress={handleAddFavorite} className='button-modal'>Add to favorites</Button>
                                }

                                {expanded == true && cryptoData !== undefined | null | '' ?
                                    <><div className='modal_item'>
                                        <ShowChartIcon />
                                        <Text b>Rank:{coinDetails?.rank}</Text>
                                    </div>
                                        <div className='modal_item'>
                                            <LegendToggleIcon />
                                            <Text>
                                                Current-Supply:{coinDetails?.supply?.circulating}
                                            </Text>
                                        </div>
                                        <div className='modal_item'>
                                            <BarChartIcon />
                                            <Text>
                                                Total-Supply:{coinDetails?.supply.total}
                                            </Text>
                                        </div>
                                        <div className='modal_item'>
                                            <MonetizationOnIcon />
                                            <Text>
                                                CurrentPrice:{millify(coinDetails?.price, { precision: 3 })} $
                                            </Text>
                                        </div>
                                        <div className='modal_item'>
                                            <PieChartOutlineIcon />
                                            <Text>
                                                Market Cap:{coinDetails?.marketCap}
                                            </Text>
                                        </div>
                                        <div className='modal_item'>
                                            <CandlestickChartIcon />
                                            <Text>
                                                All Time High:{millify(coinDetails?.allTimeHigh?.price, { precision: 3 })} $
                                            </Text>
                                        </div>
                                        <>
                                            <CalendarMonthIcon />
                                            <Text>Date:{dateConverter(coinDetails?.allTimeHigh?.timestamp)
                                            }</Text>
                                        </>
                                        <div className='modal_item'>
                                            <InfoIcon />
                                            <Text>
                                                Description:<p dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(coinDetails?.description) }}></p>
                                            </Text>
                                        </div>
                                        <div className='modal_item'>
                                            <EventAvailableIcon />
                                            <Text>
                                                Listed: {dateConverter(coinDetails?.listedAt)}
                                            </Text>
                                        </div>
                                        <div className='modal_item'>
                                            <CurrencyBitcoinIcon />
                                            <Text>
                                                Price to BTC: {coinDetails?.btcPrice}
                                            </Text>
                                        </div>
                                        <div className='modal_item'>
                                            <LanguageIcon />
                                            <Text>
                                                Website: <Link>
                                                    {coinDetails?.websiteUrl}
                                                </Link>
                                            </Text>
                                        </div>
                                    </>

                                    : null}

                            </> : null}


                    </Modal.Body>
                </Modal>


            </Card >
        </ CoinStyledScheme >
    )
};