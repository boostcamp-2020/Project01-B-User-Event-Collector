import { useState } from 'react';
import styled from 'styled-components';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

import Heart from '@components/atoms/Heart/Heart';
import TrackCard from '@components/molecules/TrackCard';
import DropDownMenu from '@components/molecules/DropdownMenu';
import LyricModal from '@components/organisms/LyricModal/LyricModal';
import QueueMusicIcon from '@material-ui/icons/QueueMusic';

interface PlayerTrackInfoProps {
    track;
}

const BackgroundImg = styled.div`
    &::after {
        content: '';
        background-image: linear-gradient(transparent, transparent),
            url(https://vibe.naver.com/img/sp_vibe.cc4cc861.svg);
        background-size: 808px 764px;
        display: inline-block;
        width: 20px;
        height: 20px;
    }
`;

const ShowLyricButton = styled(BackgroundImg)`
    &::after {
        background-position: -284px -716px;
    }
`;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const TrackCardContainer = styled.div``;

const LikeButtonContainer = styled.div`
    width: 30px;
`;

const LyricButtonContainer = styled.div`
    width: 30px;
`;

const DropDownContainer = styled.div`
    width: 30px;
    margin-left: 5px;
`;

const StyledMoreHorizIcon = styled(MoreHorizIcon)`
    right: 5%;
    bottom: 7%;
    color: #999;
    font-size: 3rem;
`;

const contentsDropDownMenu = [
    {
        content: '좋아요',
    },
    {
        content: '내 플레이리스트 추가',
    },
    {
        content: '가사 보기',
    },
];

const PlayerTrackInfo = ({ track }) => {
    const [displayLyrics, setDisplayLyrics] = useState(false);

    const onClickShowLyric = () => {
        setDisplayLyrics(!displayLyrics);
    };

    const noNowPlaying = {
        album: {imageUrl: 'http://placehold.it/20x20'},
        title: '재생중인 곡이 없습니다',
        artist: '',
        lyrics: '',
        id:0
    }

    const data = track? track: noNowPlaying;

    return (
        <Container>
            <TrackCardContainer>
                <TrackCard data={ track? track: noNowPlaying } imgVariant="trackInfo" isDefault={false} isTrack={true} />
            </TrackCardContainer>
            <LikeButtonContainer>
                <Heart isSelected={true} sort="musicPlayer" />
            </LikeButtonContainer>
        </Container>
    );
};

export default PlayerTrackInfo;
