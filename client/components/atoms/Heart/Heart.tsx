import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface HeartProps {
    isSelected: boolean;
}

const Heart = ({ isSelected }: HeartProps) => {
    return(
        <div>
            {isSelected && <FavoriteIcon style={{ color: '#FF1150' }}/>}
            {!isSelected && <FavoriteBorderIcon/>}
        </div>
        )
};

export default Heart;
