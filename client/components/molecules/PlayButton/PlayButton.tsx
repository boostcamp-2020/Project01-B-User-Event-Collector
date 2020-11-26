import React from 'react'
import PlayTriangle from '../../atoms/PlayTriangle/PlayTriangle';
import { StyledPlayButton, StyledCircle } from './PlayButton.styles';

const PlayButton = () => {
    return(
    <StyledPlayButton>
        <StyledCircle />
        <PlayTriangle />
    </StyledPlayButton>
    )
};

export default PlayButton;