import React, { useState } from 'react';
import A from '@components/atoms/A/A';
import FavoriteIcon from '@material-ui/icons/Favorite';
import HiddenText from '@components/atoms/Text/HiddenText';
import CheckBox from '@components/atoms/CheckBox';
import TrackPlayButton from '@components/molecules/TrackPlayButton';
import DropDownMenu from '@components/molecules/DropdownMenu';
import { TrackRowCardProps } from '@interfaces/props';
import LyricModal from '@components/organisms/LyricModal/LyricModal';
import { likeRequest } from '@utils/apis';
import apiUrl from '@constants/apiUrl';
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
    Like,
} from './TrackRowCard.styles';

const contentsDropDownMenu = [
    {
        content: '좋아요',
    },
    {
        content: '내 플레이리스트 추가',
    },
    {
        content: '현재재생목록에 추가',
    },
    {
        content: 'MP3 구매',
    },
    {
        content: '가사 보기',
    },
];

const likeAction = async (type, id) => {
    await likeRequest(`${apiUrl.like}${type}s`, {
        data: {
            trackId: id,
        },
    });
};

const TrackRowCard = (data: TrackRowCardProps) => {
    // TODO : component 정보에서 type 가져오기
    const type = 'track';
    const { id, title, lyrics, album, artist, liked } = data;
    const { id: albumId, title: albumTitle, imageUrl } = album;
    const { id: artistId, name: artistName } = artist;

    const [isLiked, setIsLiked] = useState(liked);
    const [displayLyrics, setDisplayLyrics] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const onClickUnlikeHandler = () => {
        setIsLiked(0);
    };

    const onClickShowLyric = () => {
        setDisplayLyrics(!displayLyrics);
    };
    const handleClose = (e) => {
        switch (e.currentTarget.innerText) {
            case contentsDropDownMenu[0].content:
                likeAction(type, id);
                setIsLiked(1);
                break;
            case contentsDropDownMenu[1].content:
                break;
            case contentsDropDownMenu[2].content:
                break;
            case contentsDropDownMenu[3].content:
                break;
            case contentsDropDownMenu[4].content:
                setDisplayLyrics(!displayLyrics);
                break;
            default:
                break;
        }
        setAnchorEl(null);
    };
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const onChangeCheckRow = (e) => {
        const list = e.target.closest('LI');
        list.classList.toggle('checked');
    };
    return (
        <List>
            <LyricModal
                src={imageUrl}
                title={albumTitle}
                artist={artistName}
                lyrics={lyrics}
                visibility={displayLyrics}
                onClickFunc={onClickShowLyric}
            />
            <TrackLeft>
                <CheckBox id={id} onChange={onChangeCheckRow} />
                <TrackPlayBtnContainer>
                    <TrackPlayButton data={data} imgVariant="trackRowCard" />
                </TrackPlayBtnContainer>
                <TrackTitle>
                    <A href={'/track/' + id}>{title}</A>
                </TrackTitle>
            </TrackLeft>
            <TrackMiddle>
                <TrackMiddleElem>
                    <A href={'/artist/' + artistId} variant="tertiary">
                        {artistName}
                    </A>
                </TrackMiddleElem>
                <TrackMiddleElem>
                    <A href={'/album/' + albumId} variant="tertiary">
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
                <ShowLyricButton onClick={onClickShowLyric}>
                    {/* <QueueMusicIcon style={{ color: '#999' }}/> */}
                </ShowLyricButton>
                <Like>
                    {isLiked == 1 && (
                        <FavoriteIcon style={{ color: '#FF1150' }} fontSize="small" onClick={onClickUnlikeHandler} />
                    )}
                    {isLiked == 0 && (
                        <DropDownMenu
                            id="contents"
                            control={StyledMoreHorizIcon}
                            menuItems={contentsDropDownMenu}
                            handleClick={handleClick}
                            handleClose={handleClose}
                            anchorEl={anchorEl}
                        />
                    )}
                    <A href="#">
                        <HiddenText>좋아요및옵션</HiddenText>
                    </A>
                </Like>
            </TrackRight>
        </List>
    );
};

export default TrackRowCard;
