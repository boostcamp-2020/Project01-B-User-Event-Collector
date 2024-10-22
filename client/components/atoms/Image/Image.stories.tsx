import React from 'react';
import Image from './Image';

export default {
    title: 'Atoms/Image',
    component: Image,
};

const STORY_IMAGE_SRC =
    'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906';

export const Default = () => <Image src={STORY_IMAGE_SRC} />;

export const Primary = () => <Image variant="primary" src={STORY_IMAGE_SRC} />;

export const NormalMagazine = () => <Image variant="normalMagazine" src={STORY_IMAGE_SRC} />;

export const News = () => <Image variant="news" src={STORY_IMAGE_SRC} />;

export const TrackRowCard = () => <Image variant="trackRowCard" src={STORY_IMAGE_SRC} />;

export const TrackInfo = () => <Image variant="trackInfo" src={STORY_IMAGE_SRC} />;

export const LyricTrackInfo = () => <Image variant="lyricTrackInfo" src={STORY_IMAGE_SRC} />;

export const SmallArtistImage = () => <Image variant="smallArtist" src={STORY_IMAGE_SRC} />;

export const RegularArtistImage = () => <Image variant="regularArtist" src={STORY_IMAGE_SRC} />;

export const LargeArtistImage = () => <Image variant="largeArtist" src={STORY_IMAGE_SRC} />;
