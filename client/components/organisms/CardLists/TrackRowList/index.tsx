import React from 'react';
import styled from 'styled-components';
import TrackRowCard from '@components/organisms/Cards/TrackRowCard';
import { TrackRowCardProps } from '@interfaces/props';

const ListContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const TrackRowList = ({ items }: { items: TrackRowCardProps[] }) => (
    <ListContainer>
        {items.map((item) => (
            <TrackRowCard {...(item as TrackRowCardProps)} />
        ))}
    </ListContainer>
);

export default TrackRowList;
