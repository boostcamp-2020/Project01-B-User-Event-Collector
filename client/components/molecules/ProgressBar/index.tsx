import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';

const PlayerSlider = withStyles({
    root: {
        color: '#ff0050',
        height: 8,
        padding: 0,
    },
    thumb: {
        height: 0,
        width: 0,
        '&:focus, &:hover, &$active': {
            boxShadow: 'none',
        },
    },
    active: {},
    valueLabel: {
        top: '20px',
        '& *': {
            backgroundColor: 'transparent',
            color: '#ff0050',
            fontSize: '15px',
            fontWeight: '500',
        },
    },
    track: {
        height: 8,
    },
    rail: {
        height: 8,
        backgroundColor: 'transparent',
    },
})(Slider);

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60).toString();
    const seconds = (time % 60).toString();
    return `${minutes.padStart(2, '0')}:${seconds.padStart(2, '0')}`;
};

interface ProgressBarProps {
    progress?: number;
    totalPlaytime: number;
}

const ProgressBar = ({ progress, totalPlaytime }: ProgressBarProps) => {
    return (
        <>
            <PlayerSlider
                valueLabelDisplay="auto"
                aria-label="player slider"
                defaultValue={progress ? progress : 0}
                scale={(x) => formatTime(Math.floor((totalPlaytime * x) / 100))}
            />
        </>
    );
};

export default ProgressBar;
