import React from 'react';
import styled from 'styled-components';
import A from '@components/atoms/A/A';
import CheckBox from '@components/atoms/CheckBox/CheckBox';
import TrackPlayButton from '@components/molecules/TrackPlayButton/TrackPlayButton';

const List = styled.li`
    list-style: none;
    border: 1px solid black;
    margin: 0;
`;
const TrackLeft = styled.div`
    border: 1px solid blue;
    display: flex;
    height: 50px;
    padding: 5px 0;
    box-sizing: border-box;
`;
const TrackMiddle = styled.div`
    border: 1px solid blue;
    display: flex;
    height: 50px;
`;
const TrackRight = styled.div`
    border: 1px solid blue;
    dispaly: flex;
`;
const TrackPlayBtnContainer = styled.div`
    padding-right: 7px;
    height: 40px;
`;
const TrackTitle = styled.div`
    padding: 13px 0 13px 7px;
`;
const TrackMiddleElem = styled.div`
    width: 195px;
    max-width: 195px;
    padding: 15px 0 15px 30px;
`;
const TrackRowCard = ({ trackId, albumImgSrc, trackTitle, artist, albumTitle }) => (
    <List>
        <TrackLeft>
            <CheckBox id={trackId} />
            <TrackPlayBtnContainer>
                <TrackPlayButton src={albumImgSrc} />
            </TrackPlayBtnContainer>
            <TrackTitle>
                <A href="#">{trackTitle}</A>
            </TrackTitle>
        </TrackLeft>
        <TrackMiddle>
            <TrackMiddleElem>
                <A href="#" variant="tertiary">
                    {artist}
                </A>
            </TrackMiddleElem>
            <TrackMiddleElem>
                <A href="#" variant="tertiary">
                    {albumTitle}
                </A>
            </TrackMiddleElem>
        </TrackMiddle>
        {/* <TrackRight></TrackRight> */}
    </List>
);

export default TrackRowCard;
