import React from 'react'
import { StyledSlideNextButton } from './SlideNextButton.styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Circle from '../../atoms/Circle/Circle';

const SlideNextButton = () => {
    return(
        <Circle variant="primary">
            <NavigateNextIcon />
        </Circle>
    )
};

export default SlideNextButton;
