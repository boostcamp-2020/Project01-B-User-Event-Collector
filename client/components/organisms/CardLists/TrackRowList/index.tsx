import React from 'react';
import styled from 'styled-components';
import TrackRowCard from '@components/organisms/Cards/TrackRowCard';
import { TrackRowCardProps } from '@interfaces/props';
import ComponentInfoWrapper from '@utils/context/ComponentInfoWrapper';
import { dataType } from '@constants/identifier';

const ListContainer = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`;
const TrackRowList = ({ items }: { items: TrackRowCardProps[] }) => (
    <ListContainer>
        {items.map((item) => (
            <ComponentInfoWrapper key={item.id} componentId={`${item.id}`} data={{ type: dataType.track, id: item.id }}>
                <TrackRowCard key={item.id} {...(item as TrackRowCardProps)} />
            </ComponentInfoWrapper>
        ))}
    </ListContainer>
);

export default TrackRowList;
