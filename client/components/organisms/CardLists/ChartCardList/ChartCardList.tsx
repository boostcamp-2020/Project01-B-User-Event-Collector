import React from 'react';
import styled from 'styled-components';
import ChartCard from '@components/molecules/ChartCard/ChartCard';
import { ChartCardProps } from '@interfaces/props';
import CardScrollList from '@components/organisms/CardScrollList/CardScrollList';
interface ChartCardListProps {
    items: ChartCardProps[];
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
const getCardBundle = (items: ChartCardProps[]): ChartCardProps[] => {
    const bundle = [];
    for (let i = 0; i < items.length; i += 5) {
        bundle.push(
            <ListContainer>
                {items.slice(i, i + 5).map((item) => (
                    // TODO : 차트카드(노래)의 id key 값으로 설정
                    <ChartCard {...(item as ChartCardProps)} />
                ))}
            </ListContainer>,
        );
    }
    return bundle;
};
const ChartCardList = ({ items }: ChartCardListProps) => (
    <CardScrollList>
        <ListContainer>
            {getCardBundle(items).map((item, idx) => (
                <List key={idx}>{item}</List>
            ))}
        </ListContainer>
    </CardScrollList>
);

export default ChartCardList;
