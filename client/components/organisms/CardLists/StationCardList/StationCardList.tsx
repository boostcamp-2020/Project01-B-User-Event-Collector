import React from 'react';
import styled from 'styled-components';
import { StationCardProps } from '@interfaces/props';
import StationCard from '@components/organisms/Cards/StationCard/StationCard';

interface StationCardListProps {
    items: StationCardProps[];
}
const ListContainer = styled.ul`
    margin: 0;
    list-style: none;
    padding: 0;
    overflow: hidden;
`;

const StyledList = styled.li`
    box-sizing: border-box;
    float: left;
    padding: 0 16px 16px 0;
    width: 196px;
`;
const StationCardList = ({ items }: StationCardListProps) => (
    <ListContainer>
        {items.map((item) => (
            <StyledList>
                <StationCard {...(item as StationCardProps)} />
            </StyledList>
        ))}
    </ListContainer>
);

export default StationCardList;
