import React from 'react';
import styled from 'styled-components';
import IconButton from '@components/atoms/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import TrackCard from '@components/molecules/TrackCard';
import { Play } from '@components/molecules/TrackPlayButton/TrackPlayButton.styles';
import { PlayerTrackCardProps } from '@interfaces/props';

const PlayerTrackCardContainer = styled.li`
    background-color: #141414;
    display: flex;
    width: 350px;
    justify-content: space-between;
    padding: 0 20px 0 12px;
    &: hover ${Play} {
        visibility: visible;
        opacity: 60%;
    }
    &:hover {
        background-color: #444;
        cursor: move;
    }
`;
const PlayerTrackCard = ({ data, artist }: PlayerTrackCardProps) => {
    return (
        <PlayerTrackCardContainer>
            <TrackCard
                data = { data } 
                imgVariant="trackRowCard"
                isDefault={true}
                isTrack={true}
            />
            <IconButton variant="plainGreyRegular" icon={CloseIcon} />
        </PlayerTrackCardContainer>
    )};

export default PlayerTrackCard;
