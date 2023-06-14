import { React, useState } from 'react';
import { useGetNewsQuery } from '../../src/services/NewsApi';
import { NewsCard } from '../NewsCard';
import { NewsStyles } from './styled';
import { Text } from '@nextui-org/react';

export const News = () => {
    const { data: newsData, isLoading: newsLoading } = useGetNewsQuery();
    const articles = newsData?.articles;
    const removeTrailingChars = (str) => {
        const index = str.indexOf('[');
        return index === -1 ? str : str.slice(0, index);
    };

    return (
        <>
            <Text h1 className="news_page_title" >
                Latest News:
            </Text>
            <NewsStyles>
                {articles &&
                    articles.map((item, index) => {
                        return (
                            <NewsCard
                                key={index}
                                title={item.title}
                                description={item.description}
                                content={removeTrailingChars(item.content)}
                                image={item.urlToImage}
                                link={item.url}
                            />
                        );
                    })}
            </NewsStyles>
        </>
    );
};
