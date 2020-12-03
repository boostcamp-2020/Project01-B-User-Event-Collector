import React, { useState } from 'react';
import A from '@components/atoms/A/A';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HiddenText from '@components/atoms/Text/HiddenText';
import CheckBox from '@components/atoms/CheckBox/CheckBox';
import TrackPlayButton from '@components/molecules/TrackPlayButton';
import DropDownMenu from '@components/molecules/DropdownMenu';
import { TrackRowCardProps } from '@interfaces/props';
import LyricModal from '@components/organisms/LyricModal/LyricModal';

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
    StyledMoreHorizIcon,
    Like
} from './TrackRowCard.styles';

const contentsDropDownMenu = [{
    content: '좋아요'
},{
    content: '내 플레이리스트 추가'
}, {
    content: '현재재생목록에 추가'
}, {
    content: 'MP3 구매'
}, {
    content: '가사 보기'
}]

const TrackRowCard = ({ trackId, albumImgSrc, trackTitle, artist, albumTitle, href, lyrics }: TrackRowCardProps) => {
    const [isLiked, setIsLiked] = useState(true);
    const [displayLyrics, setDisplayLyrics] = useState(false);

    const onClickUnlikeHandler = () => {
        setIsLiked(false);
    }

    const onClickShowLyric = () => {
        setDisplayLyrics(!displayLyrics);
    }

    return (
    <List>
        <LyricModal src={albumImgSrc} title={trackTitle} artist={artist} lyrics={lyrics} visibility = {displayLyrics} onClickFunc = {onClickShowLyric}/>
        <TrackLeft>
            <CheckBox id={trackId} />
            <TrackPlayBtnContainer>
                <TrackPlayButton src={albumImgSrc} imgVariant="trackRowCard" />
            </TrackPlayBtnContainer>
            <TrackTitle>
                <A href={href}>{trackTitle}</A>
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
            <ShowLyricButton onClick = { onClickShowLyric }>
                <A href="#">
                    <HiddenText>가사보기</HiddenText>
                </A>
            </ShowLyricButton>
            <Like>
                {isLiked && <FavoriteIcon style={{ color: '#FF1150' }} fontSize = "small" onClick = {onClickUnlikeHandler}/>}
                {!isLiked && <DropDownMenu
                    id = "contents" 
                    control = {StyledMoreHorizIcon} 
                    menuItems = {contentsDropDownMenu}/>}
                <A href="#">
                    <HiddenText>좋아요및옵션</HiddenText>
                </A>
            </Like>
        </TrackRight>
    </List>
)};

export default TrackRowCard;
