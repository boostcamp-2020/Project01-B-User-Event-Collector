import React, { useState } from 'react';
import styled from 'styled-components';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ShuffleIcon from '@material-ui/icons/Shuffle';
import RepeatIcon from '@material-ui/icons/Repeat';
import RepeatOneIcon from '@material-ui/icons/RepeatOne';
import PauseIcon from '@material-ui/icons/Pause';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import SkipNextIcon from '@material-ui/icons/SkipNext';

// interface PlayControllerProps {
//     playing: boolean;
// }
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
    const [playing, setPlaying] = useState(false);

    return (
        <Container>
            <SubIconWrapper>
                <ShuffleIcon />
            </SubIconWrapper>
            <SkipIconWrapper>
                <SkipPreviousIcon style={{ fontSize: '35px' }} />
            </SkipIconWrapper>
            <PlayIconWrapper onClick={() => setPlaying(!playing)}>
                {playing ? <PauseIcon style={{ fontSize: '55px' }} /> : <PlayArrowIcon style={{ fontSize: '55px' }} />}
            </PlayIconWrapper>
            <SkipIconWrapper>
                <SkipNextIcon style={{ fontSize: '35px' }} />
            </SkipIconWrapper>
            <SubIconWrapper>
                <RepeatIcon />
            </SubIconWrapper>
        </Container>
    );
};

export default PlayControllerButtons;
