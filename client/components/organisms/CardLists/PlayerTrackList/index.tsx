import React from 'react';
import styled from 'styled-components';
import { PlayerTrackCardProps } from 'interfaces/props';
import PlayerTrackCard from '@components/organisms/Cards/PlayerTrackCard';
import ComponentInfoWrapper from 'utils/context/ComponentInfoWrapper';
import { dataType } from 'constants/identifier';

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
          <ComponentInfoWrapper key = {item.id} componentId={`${item.id}`} data={{ type: dataType.track, id: item.id }}>
              <PlayerTrackCard 
              key = {item.id}
              data = {item} />
           </ComponentInfoWrapper>
        ))}
    </ListContainer>
)};

export default PlayerTrackList;
