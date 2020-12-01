import React from 'react';
import styled from 'styled-components';
import ChartCard from '@components/molecules/ChartCard/ChartCard';
import { ChartCardProps } from '@interfaces/props';

interface ChartCardListProps {
    items: ChartCardProps[];
}

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    border: 1px solid black;
    box-sizing: border-box;
`;

const getCardBundle = (items) => {
    const bundle = [];
    for (let i = 0; i < items.length; i += 5) {
        bundle.push(
            <ListContainer>
                {items.slice(i, i + 5).map((item) => (
                    <ChartCard {...(item as ChartCardProps)} />
                ))}
            </ListContainer>,
        );
    }
    return bundle;
};
const ChartCardList = ({ items }: ChartCardListProps) => <>{getCardBundle(items).map((item) => item)}</>;

export default ChartCardList;
