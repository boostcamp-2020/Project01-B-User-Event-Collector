import React from 'react';
import A from '@components/atoms/A/A';
import HiddenText from '@components/atoms/Text/HiddenText';
import CheckBox from '@components/atoms/CheckBox/CheckBox';
import TrackPlayButton from '@components/molecules/TrackPlayButton/TrackPlayButton';
import {
    List,
    TrackLeft,
    TrackMiddle,
    TrackRight,
    TrackPlayBtnContainer,
    TrackTitle,
    TrackMiddleElem,
    Mp3,
    ShowLyricButton,
    LikeOptions,
} from './TrackRowCard.styles';
import { TrackRowCardProps } from '@interfaces/props';
const TrackRowCard = ({ trackId, albumImgSrc, trackTitle, artist, albumTitle }: TrackRowCardProps) => (
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
