import React from 'react';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';
import VolumeUp from '@material-ui/icons/VolumeUp';

const VolumnSlider = withStyles({
    root: {
        color: '#bcbcbc',
        width: 100,
    },
    thumb: {
        height: 0,
        width: 0,
        '&:focus, &:hover, &$active': {
            boxShadow: 'none',
        },
    },
    track: {
        height: 4,
    },
    rail: {
        height: 4,
    },
})(Slider);

const Container = styled.div`
    color: #bcbcbc;
`;

const VolumnController = () => {
    return (
        <Container>
            <VolumeUp />
            <VolumnSlider defaultValue={50} aria-labelledby="continuous-slider" />
        </Container>
    );
};

export default VolumnController;
