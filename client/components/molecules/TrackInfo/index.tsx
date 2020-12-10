import React from 'react';
import styled, { css } from 'styled-components';
import StyledA from '@components/atoms/A/A.styles';
import { Track } from '@components/organisms/Library/LibraryHeader/LibraryHeader.stories';
import { TrackInfoProps } from '@interfaces/props';

const TrackInfoContainer = styled.div`
    padding: 0 20px 0 12px;
    line-height: 20px;
`;
const MoveInfoDetail = styled(StyledA)<{ top: boolean; track: boolean }>`
    display: block;
    line-height: 17px;
    text-overflow: ellipsis;
    width: 222px;
    white-space: nowrap;
    overflow: hidden;
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
            padding-top: 2px;
            font-size: 14px;
        `};
`;
const TrackInfo = ({ data , track }: TrackInfoProps) => {
    const { id, title, artistId, artist } = data;
    const { name: artistName } = artist;
    return(
        <TrackInfoContainer>
            <MoveInfoDetail href={"/track/"+id} variant="fourth" top={true} track={track}>
                {title}
            </MoveInfoDetail>
            <MoveInfoDetail href={"/artist/"+artistId} variant="tertiary" top={track ? false : true} track={track}>
                {artistName}
            </MoveInfoDetail>
        </TrackInfoContainer>
    )};

export default TrackInfo;
