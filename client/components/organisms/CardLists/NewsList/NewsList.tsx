import React from 'react';
import NewsCard from '@components/organisms/Cards/NewsCard';
import { NewsCardProps } from '@interfaces/props';
import styled from 'styled-components';

export const List = styled.ul`
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    box-sizing: border-box;
    margin-left: 17px;

    &:first-child {
        margin-left: 0;
    }
`;

interface NewsListProps {
    items: NewsCardProps[];
}

const NewsList = ({ items }: NewsListProps) => (
    <List>
        {items.map((item) => (
            <Item>
                <NewsCard {...item} />
            </Item>
        ))}
    </List>
);

export default NewsList;
