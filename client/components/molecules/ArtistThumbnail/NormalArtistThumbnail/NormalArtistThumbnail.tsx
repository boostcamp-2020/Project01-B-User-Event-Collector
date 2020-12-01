import React from 'react';
import styled from 'styled-components';
import Image from '../../../atoms/Image/Image';

const Card = styled.div`
    width: 180px;
    height: 220px;
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

interface NormalArtistThumbnailProps {
    name: string;
    src: string;
}

const NormalArtistThumbnail = ({ name, src }: NormalArtistThumbnailProps) => (
    <Card>
        <Image variant = "regularArtist" src = {src}/>
        <ArtistName>{name}</ArtistName>
    </Card>
  );
  
  export default NormalArtistThumbnail;