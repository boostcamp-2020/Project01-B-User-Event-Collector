import React from 'react';
import styled from 'styled-components';
import StyledA from '@components/atoms/A/A.styles';

interface TrackInfoProps {
    trackTitle: string;
    artist: string;
}
const TrackInfoContainer = styled.div`
    padding: 0 20px 0 12px;
    line-height: 21px;
`;

const MoveInfoDetail = styled(StyledA)`
    display: block;
`;
const TrackInfo = ({ trackTitle, artist }: TrackInfoProps) => (
    <TrackInfoContainer>
        <MoveInfoDetail href="#" variant="">
            {trackTitle}
        </MoveInfoDetail>
        <MoveInfoDetail href="#" variant="tertiary">
            {artist}
        </MoveInfoDetail>
    </TrackInfoContainer>
);

export default TrackInfo;
