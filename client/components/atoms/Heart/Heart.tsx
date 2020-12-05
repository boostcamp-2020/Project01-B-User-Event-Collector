import React, { MouseEvent, useState } from 'react';
import styled from 'styled-components';

import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

interface HeartProps {
    isSelected: boolean;
    sort?: 'musicPlayer'
}

const Container = styled.div`
`;

const Heart = ({ isSelected, sort }: HeartProps) => {
    const [isClicked, setIsClicked] = useState(false);
    const onClickHandler = () => {
        setIsClicked(!isClicked);
    }
    return(
        <Container onClick = { onClickHandler }>
            {isClicked && sort !== 'musicPlayer' && <FavoriteIcon style={{ color: '#FF1150' }}/>}
            {!isClicked && sort !== 'musicPlayer' && <FavoriteBorderIcon/>}
            {isClicked && sort === 'musicPlayer' && <FavoriteIcon style={{ color: '#FF1150' }} fontSize = "small" />}
            {!isClicked && sort === 'musicPlayer' && <FavoriteBorderIcon style={{ color: '#FFFFFF' }} fontSize = "small"/>}
        </Container>
        )
};

export default Heart;
