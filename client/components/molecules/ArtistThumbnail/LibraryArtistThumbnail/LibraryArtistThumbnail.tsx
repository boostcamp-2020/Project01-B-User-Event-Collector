import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from '../../../atoms/Image/Image';
import ArtistLikeButton from '../../ArtistLikeButton/ArtistLikeButton';

import { LibraryArtistThumbnailProps } from '@interfaces/props';

const Card = styled.div`
    width: 180px;
    height: 225px;
    position: relative;
    display: flex;
    justify-content: center;
`;

const ArtistName = styled.a`
    position: absolute;
    bottom: 15px;
    font-size: 14px;
    font-weight: 400;
    cursor: pointer;
`;

const ArtistLikeButtonContainer = styled.div`
    position: absolute;
    bottom: 30px;
    right: 15px;
    z-index: 10;
`;

const LibraryArtistThumbnail = (data: LibraryArtistThumbnailProps) => {
    const { id, name, imageUrl } = data;
    return (
        <Card>
            <Image variant="regularArtist" src={imageUrl} />
            <ArtistLikeButtonContainer>
                <ArtistLikeButton />
            </ArtistLikeButtonContainer>
            <Link href={`/artist/${id}`}>
                <ArtistName>{name}</ArtistName>
            </Link>
        </Card>
    );
};

export default LibraryArtistThumbnail;
