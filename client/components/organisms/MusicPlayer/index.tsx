import styled from 'styled-components';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PlayerTrackList from '@components/organisms/CardLists/PlayerTrackList';
import PlayController from '@components/organisms/MusicPlayer/PlayController';

import { contentType } from 'constants/identifier';
import ComponentInfoWrapper from 'utils/context/ComponentInfoWrapper';

interface MusicPlayerProps {
    tracks;
}

interface HeaderContainerProps {
    visible: boolean;
}

const Container = styled.div`
    display: flex;
    z-index: 200;
`;

const HeaderContainer = styled.div<HeaderContainerProps>`
    position: fixed;
    top: 0;
    right: 0;
    bottom: 90px;
    left: 0;
    visibility: ${(props) => (props.visible === true ? 'visible;' : 'hidden;')};
    background-color: rgba(0, 0, 0, 0.85);
    width: 100%;
    display: flex;
    z-index: 200;
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
    z-index: 500;
`;

const MusicPlayer = () => {
    const dispatch = useDispatch();
    const { nowPlaying, playTime, upNextTracks } = useSelector(state => state.musicPlayer);
    const [displayHeader, setDisplayHeader] = useState(false);

    const displayHeaderHandler = () => {
        setDisplayHeader(!displayHeader);
    };

    return (
        <Container>
            <ComponentInfoWrapper componentId={contentType.upNext}>
                <HeaderContainer visible={displayHeader}>
                    <ImageContainer>
                        <StyledImage src={nowPlaying.album.imageUrl} />
                    </ImageContainer>
                    <TrackListContainer>
                        <TrackHeaderContainer>이어지는 노래</TrackHeaderContainer>
                        <TrackContainer>
                            <PlayerTrackList items={upNextTracks} />
                        </TrackContainer>
                    </TrackListContainer>
                </HeaderContainer>
            </ComponentInfoWrapper>
            <ComponentInfoWrapper componentId={contentType.playController}>
                <ControllerContainer>
                    <PlayController
                        track={nowPlaying}
                        displayHeader={displayHeader}
                        displayHeaderHandler={displayHeaderHandler}
                    />
                </ControllerContainer>
            </ComponentInfoWrapper>
        </Container>
    );
};

export default MusicPlayer;
