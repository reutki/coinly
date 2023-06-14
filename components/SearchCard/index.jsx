import React from 'react';
import { Avatar, Text, Card } from '@nextui-org/react';
import millify from 'millify';

export const SearchCard = ({ icon, name, price, rank, uuid, isModal, handleCardClick }) => {
    const newPrice = Number(price).toFixed(2);

    const handleClick = () => {
        if (handleCardClick) {
            handleCardClick(uuid); // Pass the uuid of the clicked coin to the parent component
        }
    };

    return (
        <Card
            fullScreen={isModal}
            isPressable={!isModal}
            className="card-container"
            onClick={handleClick}
        >
            <Card.Body className="card-body">
                <div className="name">
                    <Avatar src={icon} alt="coin logo" />
                    <Text h5>{name}</Text>
                </div>
                <div className="price">
                    <Text b>{millify(newPrice)}$</Text>
                </div>
            </Card.Body>
        </Card>
    );
};
