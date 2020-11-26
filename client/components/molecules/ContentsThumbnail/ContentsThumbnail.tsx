import React from 'react';
import styled from 'styled-components';
import Image from '../../atoms/Image/Image';
import PlayButton from '../PlayButton/PlayButton';

const ThunbnailContainer = styled.div`
    background-color: pink;
    position: relative;
`;

const ButtonContainer = styled.div`
    background-color: red;
    z-index: 2;
    position: relative;
`;

interface ContentsThumbnailProps {
    src: string,
    href: string,
    sort: 'news' | 'mainMagazine' | 'normalMagazine' | 'recommendPlaylist' | 'normalPlaylist'
};

const ContentsThumbnail = ( { src, href, sort } ) => (
    <ThunbnailContainer>
        <Image src = {src} variant = { sort === 'news' ? 'news' : 
                                sort === 'mainMagazine' || sort === 'recommendPlaylist' ? 'primary' : 
                                sort === 'normalMagazine' ? 'normalMagazine' : ''}/>
        <ButtonContainer>
            <PlayButton />
        </ButtonContainer>
    </ThunbnailContainer>
)

export default ContentsThumbnail;