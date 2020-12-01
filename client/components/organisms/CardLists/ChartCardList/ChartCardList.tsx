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

const ChartCardList = ({ items }: ChartCardListProps) => (
    <ListContainer>
        {items.map((item) => (
            <ChartCard {...(item as ChartCardProps)} />
        ))}
    </ListContainer>
);

export default ChartCardList;
