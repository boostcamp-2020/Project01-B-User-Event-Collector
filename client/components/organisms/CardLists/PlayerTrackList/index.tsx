import React from 'react';
import styled from 'styled-components';
import TrackCard from '@components/molecules/TrackCard';
import { TrackCardProps } from '@interfaces/props';

const ListContainer = styled.ul`
    background-color: #141414;
`;
const PlayerTrackList = ({ items }: { items: TrackCardProps[] }) => (
    <ListContainer>
        {items.map((item) => (
            <TrackCard {...(item as TrackCardProps)} />
        ))}
    </ListContainer>
);

export default PlayerTrackList;
