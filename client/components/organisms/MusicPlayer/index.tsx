import styled from 'styled-components';
import { useState } from 'react';

import PlayerTrackList from '@components/organisms/CardLists/PlayerTrackList';
import PlayController from '@components/organisms/MusicPlayer/PlayController';
import ContentsThumbnailStories from '@components/molecules/ContentsThumbnail/ContentsThumbnail.stories';
import { Console } from 'console';

interface MusicPlayerProps {
    tracks
}

interface HeaderContainerProps {
    visible: boolean;
}

const Container = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 90px;
    left: 0;
    display: flex;
    z-index: 20000;
`;

const HeaderContainer = styled.div<HeaderContainerProps>`
    visibility : ${(props) => (props.visible === true ? 'visible;' : 'hidden;')};
    background-color: rgba(0, 0, 0, 0.85);
    width: 100%;
    display: flex;
`;

const ImageContainer = styled.div`
    position: absolute;
    top: 0;
    right: 350px;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledImage = styled.img`
    width: 600px;
    height: 600px;
`;

const TrackListContainer = styled.div`
    background-color: #141414;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 350px;
    display: flex;
    flex-flow: column;
`;

const TrackHeaderContainer = styled.div`
    color: white;
    font-size: 15px;
    line-height: 19px;
    font-weight: 700;
    position: relative;
    margin: 26px 0 0 20px;
`;

const TrackContainer = styled.div`
    position: absolute;
    top: 62px;
    right: 0;
    bottom: 0;
    left: 0;
    overflow-x: hidden;
`;

const ControllerContainer = styled.div`
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
`;

const PlayerTrackCardDatas = Array(20).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    trackTitle: 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',
    artist: '나는가수다',
});

const MusicPlayer = ({tracks} : MusicPlayerProps) => {
    const [nowPlaying, setNowPlaying] = useState(tracks[0]);
    const [displayHeader, setDisplayHeader] = useState(false);

    const displayHeaderHandler = () => {
        setDisplayHeader(!displayHeader);
    }

    return (
        <Container>
            <HeaderContainer visible = { displayHeader } >
                <ImageContainer>
                    <StyledImage src = { nowPlaying.album.imageUrl } />
                </ImageContainer>
                <TrackListContainer>
                    <TrackHeaderContainer>이어지는 노래</TrackHeaderContainer>
                    <TrackContainer>
                        <PlayerTrackList items={ tracks } />
                    </TrackContainer>
                </TrackListContainer>
            </HeaderContainer>
            <ControllerContainer>
                <PlayController 
                track = { nowPlaying } 
                displayHeader = { displayHeader } 
                displayHeaderHandler = { displayHeaderHandler } />
            </ControllerContainer>
        </Container>
    )
}

export default MusicPlayer;