import React from 'react';
import styled from 'styled-components';
import IconButton from '@components/atoms/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TrackCard from '@components/molecules/TrackCard';

interface PlayerTrackCardProps {
    src: string;
    trackTitle: string;
    artist: string;
}

const PlayerTrackCardContainer = styled.div`
    background-color: #141414;
    display: flex;
    width: 350px;
    justify-content: space-between;
    padding: 0 12px 0 20px;
`;
const PlayerTrackCard = ({ src, trackTitle, artist }: PlayerTrackCardProps) => (
    <PlayerTrackCardContainer>
        <TrackCard
            src={src}
            trackTitle={trackTitle}
            artist={artist}
            imgVariant="trackRowCard"
            isDefault={true}
            isTrack={true}
        />
        <IconButton variant="plainGreyRegular" icon={CloseIcon} />
    </PlayerTrackCardContainer>
);

export default PlayerTrackCard;
