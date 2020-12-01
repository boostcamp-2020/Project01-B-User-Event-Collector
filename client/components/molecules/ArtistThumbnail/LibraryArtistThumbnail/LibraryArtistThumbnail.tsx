import React from 'react';
import styled from 'styled-components';
import Image from '../../../atoms/Image/Image';
import ArtistLikeButton from '../../ArtistLikeButton/ArtistLikeButton';

import { LibraryArtistThumbnailProps } from '@interfaces/props';

const Card = styled.div`
    width: 180px;
    height: 225px;
    position: relative;
    display: flex;
    justify-content:center;
`;

const ArtistName = styled.div`
    position: absolute;
    bottom: 15px;
    font-size: 14px;
    font-weight: 400;
`;

const ArtistLikeButtonContainer = styled.div`
    position: absolute;
    bottom: 30px;
    right: 15px;
    z-index:10;
`;

const LibraryArtistThumbnail = ({ name, src, href }: LibraryArtistThumbnailProps) => (
    <Card>
        <Image variant = "regularArtist" src = {src}/>
        <ArtistLikeButtonContainer>
            <ArtistLikeButton />
        </ArtistLikeButtonContainer>
        <ArtistName>{name}</ArtistName>
    </Card>
  );
  
  export default LibraryArtistThumbnail;