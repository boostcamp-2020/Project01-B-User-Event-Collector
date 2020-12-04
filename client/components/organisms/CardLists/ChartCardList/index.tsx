import React from 'react';
import styled from 'styled-components';
import ChartCard from '@components/molecules/ChartCard/ChartCard';
import { ChartCardProps } from '@interfaces/props';

interface ChartCardListProps {
    items: ChartCardProps[];
    unit: number;
}

const ListContainer = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    white-space: nowrap;
`;
const List = styled.li`
    margin: 0;
    width: 50%;
    padding: 0 10px;
    display: inline-block;
    box-sizing: border-box;
`;
const getCardBundle = (items: ChartCardProps[], unit: number): ChartCardProps[] => {
    const bundle = [];
    for (let i = 0; i < items.length; i += unit) {
        bundle.push(
            <ListContainer>
                {items.slice(i, i + unit).map((item) => (
                    // TODO : 차트카드(노래)의 id key 값으로 설정
                    <ChartCard {...(item as ChartCardProps)} />
                ))}
            </ListContainer>,
        );
    }
    return bundle;
};
const ChartCardList = ({ items, unit }: ChartCardListProps) => (
    <ListContainer>
        {getCardBundle(items, unit).map((item, idx) => (
            <List key={idx}>{item}</List>
        ))}
    </ListContainer>
);

export default ChartCardList;
