import React, { MouseEvent } from 'react';
//import { StyledSlideNextButton } from './SlideNextButton.styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Circle from '../../atoms/Circle/Circle';

interface SlideNextButtonProps {
    onClick?: (e: MouseEvent<HTMLElement>) => void;
}

const SlideNextButton = ({ onClick }: SlideNextButtonProps) => {
    return (
        <Circle variant="primary" onClick={onClick}>
            <NavigateNextIcon />
        </Circle>
    );
};

export default SlideNextButton;
