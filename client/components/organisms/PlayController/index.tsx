import React, { MouseEvent } from 'react';
import styled from 'styled-components';
import PlayControllerButtons from '@components/molecules/PlayControllerButtons';
import ProgressBar from '@components/molecules/ProgressBar';

interface UserProfileMenuProps {}

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
    padding-top: 20px;
`;

const PlayController = ({}: UserProfileMenuProps) => {
    return (
        <Container>
            <ProgresBarContainer>
                <ProgressBar totalPlaytime={200} progress={50} />
            </ProgresBarContainer>
            <SectionContainer>
                <PlayControllerButtons playing={false} />
            </SectionContainer>
        </Container>
    );
};

export default PlayController;
