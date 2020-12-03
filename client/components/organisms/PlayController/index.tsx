import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import PlayControllerButtons from '@components/molecules/PlayControllerButtons';
import Playtime from '@components/atoms/Playtime';
import VolumnController from '@components/molecules/VolumnController';
import PlaylistDisplayButton from '@components/molecules/PlaylistDisplayButton';
import ProgressBar from '@components/molecules/ProgressBar';

const Container = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;
    height: 90px;
    background-color: rgba(25, 25, 25, 0.97);
`;

const ProgresBarContainer = styled.div`
    position: absolute;
    top: -10px;
    right: 0;
    left: 0;
    z-index: 200;
`;

const SectionContainer = styled.div`
    padding-top: 10px;
`;

const PlayButtonsContainer = styled.div`
    position: absolute;
    top: 13px;
    right: 345px;
    left: 345px;
`;

const PlaytimeContainer = styled.div`
    position: absolute;
    right: 258px;
    top: 34px;
`;

const VolumnControllerContainer = styled.div`
    position: absolute;
    top: 24px;
    right: 110px;
`;

const DisplayButtonContaier = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 90px;
    text-align: center;
    border-left: 1px solid hsla(0, 0%, 84.7%, 0.15);
`;

const PlayController = () => {
    return (
        <Container>
            <ProgresBarContainer>
                <ProgressBar totalPlaytime={200} progress={50} />
            </ProgresBarContainer>
            <SectionContainer>
                <PlayButtonsContainer>
                    <PlayControllerButtons />
                </PlayButtonsContainer>
                <PlaytimeContainer>
                    <Playtime current={100} total={200} />
                </PlaytimeContainer>
                <VolumnControllerContainer>
                    <VolumnController />
                </VolumnControllerContainer>
                <DisplayButtonContaier>
                    <PlaylistDisplayButton open={true} />
                </DisplayButtonContaier>
            </SectionContainer>
        </Container>
    );
};

export default PlayController;
