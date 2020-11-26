import React from 'react'
import { StyledArtistLikeButton } from './ArtistLikeButton.styles';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Circle from '../../atoms/Circle/Circle';

const ArtistLikeButton = () => {
    return(
        <Circle>
            <FavoriteIcon style={{ color: '#FF1150' }} />
        </Circle>
    )
};

export default ArtistLikeButton;
