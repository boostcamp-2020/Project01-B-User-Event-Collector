import React from 'react';
import styled from 'styled-components';
import { PlayerTrackCardProps } from '@interfaces/props';
import PlayerTrackCard from '@components/organisms/Cards/PlayerTrackCard';

const ListContainer = styled.ul`
    overflow-y: auto;
    position: absolute;
    top: 0;
    bottom: 90px;
    right: 0;
    z-index: 2;
`;
const PlayerTrackList = ({ items }: { items: PlayerTrackCardProps[] }) => (
    <ListContainer>
        {items.map((item) => (
            <PlayerTrackCard {...(item as PlayerTrackCardProps)} />
        ))}
    </ListContainer>
);

export default PlayerTrackList;
