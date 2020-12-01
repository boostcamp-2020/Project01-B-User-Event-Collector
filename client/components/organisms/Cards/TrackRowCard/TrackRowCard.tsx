import React from 'react';
import styled from 'styled-components';
import A from '@components/atoms/A/A';
import HiddenText from '@components/atoms/Text/HiddenText';
import CheckBox from '@components/atoms/CheckBox/CheckBox';
import TrackPlayButton from '@components/molecules/TrackPlayButton/TrackPlayButton';
import ArtistLikeButton from '@components/molecules/ArtistLikeButton/ArtistLikeButton';
const List = styled.li`
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: space-between;
`;
const TrackLeft = styled.div`
    display: flex;
    height: 50px;
    padding: 5px 0;
    box-sizing: border-box;
    width: 380px;
`;
const TrackMiddle = styled.div`
    display: flex;
    height: 50px;
`;
const TrackRight = styled.div`
    display: flex;
    padding: 15px 0;
    box-sizing: border-box;
    height: 50px;
    width: 136px;
    justify-content: space-between;
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
const Mp3 = styled.div`
    &::after {
        content: '';
        background-image: linear-gradient(transparent, transparent),
            url(https://vibe.naver.com/img/sp_vibe.cc4cc861.svg);
        background-size: 808px 764px;

        background-position: -710px -562px;
        width: 30px;
        height: 20px;
        display: inline-block;
    }
`;
const ShowLyricButton = styled.div`
    &::after {
        content: '';
        background-image: linear-gradient(transparent, transparent),
            url(https://vibe.naver.com/img/sp_vibe.cc4cc861.svg);
        background-size: 808px 764px;

        background-position: -284px -716px;
        width: 20px;
        height: 20px;
        display: inline-block;
    }
`;
const LikeOptions = styled.div`
    &::after {
        content: '';
        background-image: linear-gradient(transparent, transparent),
            url(https://vibe.naver.com/img/sp_vibe.cc4cc861.svg);
        background-size: 808px 764px;

        background-position: -760px -325px;
        width: 18px;
        height: 18px;
        display: inline-block;
    }
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
        <TrackRight>
            <Mp3>
                <A href="#">
                    <HiddenText>mp3구매</HiddenText>
                </A>
            </Mp3>
            <ShowLyricButton>
                <A href="#">
                    <HiddenText>가사보기</HiddenText>
                </A>
            </ShowLyricButton>
            <LikeOptions>
                <A href="#">
                    <HiddenText>좋아요및옵션</HiddenText>
                </A>
            </LikeOptions>
        </TrackRight>
    </List>
);

export default TrackRowCard;
