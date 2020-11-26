import React from 'react'
import { StyledSlideButton } from './SlideButton.styles';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Circle from '../../atoms/Circle/Circle';

const SlideButton = () => {
    return(
        <Circle variant="primary">
            <NavigateNextIcon />
        </Circle>
    )
};

export default SlideButton;
