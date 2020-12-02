import React from 'react';
import styled, { css } from 'styled-components';
import StyledA from '@components/atoms/A/A.styles';
import { Track } from '@components/organisms/Library/LibraryHeader/LibraryHeader.stories';

interface TrackInfoProps {
    trackTitle: string;
    artist: string;
    track: boolean;
}
const TrackInfoContainer = styled.div`
    padding: 0 20px 0 12px;
    line-height: 20px;
`;
const MoveInfoDetail = styled(StyledA)<{ top: boolean; track: boolean }>`
    display: block;
    line-height: 17px;
    ${(props) =>
        props.top &&
        css`
            line-height: 21px;
        `}
    ${(props) =>
        props.track &&
        props.top &&
        css`
            color: #fff;
            padding-top: 4px;
            font-size: 14px;
        `}
`;
const TrackInfo = ({ trackTitle, artist, track }: TrackInfoProps) => (
    <TrackInfoContainer>
        <MoveInfoDetail href="#" variant="fourth" top={true} track={track}>
            {trackTitle}
        </MoveInfoDetail>
        <MoveInfoDetail href="#" variant="tertiary" top={track ? false : true} track={track}>
            {artist}
        </MoveInfoDetail>
    </TrackInfoContainer>
);

export default TrackInfo;
