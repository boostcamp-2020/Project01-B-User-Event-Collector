import React from 'react'
import { StyledSlidePrevButton } from './SlidePrevButton.styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Circle from '../../atoms/Circle/Circle';

const SlidePrevButton = () => {
    return(
        <Circle variant="primary">
            <NavigateBeforeIcon />
        </Circle>
    )
};

export default SlidePrevButton;
