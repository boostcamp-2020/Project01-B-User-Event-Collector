import React, { useState } from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import { playPrevTrack, playNextTrack } from 'reducers/musicPlayer';
import { useSelector, useDispatch } from 'react-redux';
import usePlayNowEventLog from 'hooks/usePlayNowEventLog';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PlayIconWrapper = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: #ff0050;
    padding: auto;
    background-color: inherit;

    &:hover {
        background-color: rgba(100, 100, 100, 0.3);
    }
`;

const SkipIconWrapper = styled.button`
    width: 56px;
    height: 56px;
    color: white;
    background-color: transparent;
`;

const SubIconWrapper = styled.button`
    width: 56px;
    height: 56px;
    color: grey;
`;

const PlayControllerButtons = () => {
    const dispatch = useDispatch();
    const [playing, setPlaying] = useState(false);
    const user = useSelector((state) => state.user);
    const { nowPlaying, upNextTracks, playTime } = useSelector((state) => state.musicPlayer);
    const logPlayNowEvent = usePlayNowEventLog({ userId: user.id });

    const getNextTrackId = ({ upNextTracks, nowPlaying }) => {
        const nowPlayingIdx = upNextTracks.findIndex((t) => t.id === nowPlaying.id);
        const nextTrackIdx = nowPlayingIdx === upNextTracks.length - 1 ? nowPlayingIdx : nowPlayingIdx + 1;
        return upNextTracks[nextTrackIdx]?.id;
    };

    const getPrevTrackId = ({ upNextTracks, nowPlaying }) => {
        const nowPlayingIdx = upNextTracks.findIndex((t) => t.id === nowPlaying.id);
        const prevTrackIdx = nowPlayingIdx == 0 ? nowPlayingIdx : nowPlayingIdx - 1;
        return upNextTracks[prevTrackIdx]?.id;
    };

    const toPrevTrack = () => {
        dispatch(playPrevTrack());
        const prevTrackId = getPrevTrackId({ nowPlaying, upNextTracks });
        if (!prevTrackId || prevTrackId === nowPlaying.id) return;
        logPlayNowEvent(prevTrackId, nowPlaying.id, playTime, nowPlaying.playtime);
    };

    const toNextTrack = () => {
        dispatch(playNextTrack());
        const nextTrackId = getNextTrackId({ nowPlaying, upNextTracks });
        if (!nextTrackId || nextTrackId === nowPlaying.id) return;
        logPlayNowEvent(nextTrackId, nowPlaying.id, playTime, nowPlaying.playtime);
    };

    return (
        <Container>
            <SubIconWrapper>
                <ShuffleIcon />
            </SubIconWrapper>
            <SkipIconWrapper>
                <SkipPreviousIcon style={{ fontSize: '35px' }} onClick={toPrevTrack} />
            </SkipIconWrapper>
            <PlayIconWrapper onClick={() => setPlaying(!playing)}>
                {playing ? <PauseIcon style={{ fontSize: '55px' }} /> : <PlayArrowIcon style={{ fontSize: '55px' }} />}
            </PlayIconWrapper>
            <SkipIconWrapper>
                <SkipNextIcon style={{ fontSize: '35px' }} onClick={toNextTrack} />
            </SkipIconWrapper>
            <SubIconWrapper>
                <RepeatIcon />
            </SubIconWrapper>
        </Container>
    );
};

export default PlayControllerButtons;
