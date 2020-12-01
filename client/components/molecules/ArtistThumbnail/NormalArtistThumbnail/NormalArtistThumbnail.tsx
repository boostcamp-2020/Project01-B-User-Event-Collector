import React from 'react';
import styled from 'styled-components';
import Image from '../../../atoms/Image/Image';

import { NormalArtistThumbnailProps } from '../../../../interfaces/props';

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

const NormalArtistThumbnail = ({ name, src, href }: NormalArtistThumbnailProps) => (
    <Card>
        <Image variant = "regularArtist" src = {src}/>
        <ArtistName>{name}</ArtistName>
    </Card>
  );
  
  export default NormalArtistThumbnail;