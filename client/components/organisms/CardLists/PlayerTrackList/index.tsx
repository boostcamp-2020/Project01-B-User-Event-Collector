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

const PlayerTrackList = ({ items }: { items: PlayerTrackCardProps[] }) => {
    return (
    <ListContainer>
        {items.map((item) => (
            <PlayerTrackCard 
            key={item.id}
            data={item}
            artist={item.artist.name} />
        ))}
    </ListContainer>
)};

export default PlayerTrackList;
