import React from 'react';
import styled from 'styled-components';
import Image from '../../../atoms/Image/Image';
import ArtistLikeButton from '../../ArtistLikeButton/ArtistLikeButton';

const Card = styled.div`
    width: 219.64px;
    height: 245px;
    position: relative;
    display: flex;
    justify-content:center;
`;

const ArtistName = styled.div`
    position: absolute;
    bottom: 0px;
    font-size: 14px;
    font-weight: 400;
`;

const ArtistLikeButtonContainer = styled.div`
    position: absolute;
    bottom: 20px;
    right: 15px;
    z-index:10;
`;

interface LibraryArtistThumbnailProps {
    name: string;
    src: string;
}

const LibraryArtistThumbnail = ({ name, src }: LibraryArtistThumbnailProps) => (
    <Card>
        <Image variant = "largeArtistImage" src = {src}/>
        <ArtistLikeButtonContainer>
            <ArtistLikeButton />
        </ArtistLikeButtonContainer>
        <ArtistName>{name}</ArtistName>
    </Card>
  );
  
  export default LibraryArtistThumbnail;