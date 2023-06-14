import React from 'react'
import { CardStyles } from './styled'
import { Card, Text } from '@nextui-org/react'

export const NewsCard = ({ title, description, content, image, link }) => {

    return (
        <CardStyles>
            <Card isPressable onClick={() => window.open(link, '_blank')} className='cardContainer'>
                <Card.Body>
                    <Card.Image
                        className='cardImage'
                        src={image}
                        alt="news photo"
                    />
                    <Text h5>{title}</Text>
                    <Text>{description}</Text>
                    <Text className='cardText'>{content}</Text>
                </Card.Body>
            </Card>
        </CardStyles>
    )
}
