import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Slider } from '@material-ui/core';
import { convertToHHSS } from '@utils/time';

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
                scale={(x) => convertToHHSS(Math.floor((totalPlaytime * x) / 100))}
            />
        </>
    );
};

export default ProgressBar;
