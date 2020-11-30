import React, { MouseEvent } from 'react'
//import { StyledSlidePrevButton } from './SlidePrevButton.styles';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import Circle from '@components/atoms/Circle/Circle';

interface SlidePrevButtonProps {
    onClick: (e: MouseEvent<HTMLElement>) => void;
}

const SlidePrevButton = ({ onClick }: SlidePrevButtonProps) => {
    return(
        <Circle variant="primary" onClick={onClick}>
            <NavigateBeforeIcon />
        </Circle>
    )
};

export default SlidePrevButton;
