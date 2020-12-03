import React from 'react';
import styled, { css } from 'styled-components';
import TrackPlayButton from '@components/molecules/TrackPlayButton';
import TrackInfo from '@components/molecules/TrackInfo';
import { TrackCardProps } from '@interfaces/props';

const TrackCardContainer = styled.div<{ isDefault: boolean }>`
    display: flex;
    height: 46px;
    ${(props) =>
        props.isDefault &&
        css`
            padding: 8px 0;
            height: 56px;
        `}
`;
const TrackCard = ({ src, trackTitle, artist, imgVariant, isDefault, isTrack }: TrackCardProps) => (
    <TrackCardContainer isDefault={isDefault}>
        <TrackPlayButton src={src} imgVariant={imgVariant} />
        <TrackInfo trackTitle={trackTitle} artist={artist} track={isTrack} />
    </TrackCardContainer>
);

export default TrackCard;
