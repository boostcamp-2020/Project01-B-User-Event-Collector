import React from 'react';
import styled from 'styled-components';
import { PlayerTrackCardProps } from '@interfaces/props';
import PlayerTrackCard from '@components/organisms/Cards/PlayerTrackCard';

const ListContainer = styled.ul`
    background-color: #141414;
`;
const PlayerTrackList = ({ items }: { items: PlayerTrackCardProps[] }) => (
    <ListContainer>
        {items.map((item) => (
            <PlayerTrackCard {...(item as PlayerTrackCardProps)} />
        ))}
    </ListContainer>
);

export default PlayerTrackList;
