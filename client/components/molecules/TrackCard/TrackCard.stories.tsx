import React from 'react';
import TrackCard from '.';

export default {
    title: 'Molecules/TrackCard',
    component: TrackCard,
};


const data = {
    id : 1,
    title : '그냥',
    artistId: 1,
    albumId: 1,
    lyrics: '가사입니다',
    artist: { id: 1, name: '이영지' },
    album: { id: 1, title: '그냥', imageUrl: "https://musicmeta-phinf.pstatic.net/album/004/551/4551646.jpg?type=r720Fll&v=20200507115931" }
}

export const Playlist = () => (
    <TrackCard
        data={data} 
        imgVariant="trackRowCard"
        isDefault={true}
        isTrack={true}
    />
);
export const NowPlaying = () => (
    <TrackCard
        data={data} 
        imgVariant="trackInfo"
        isDefault={false}
        isTrack={true}
    />
);
export const Chart = () => (
    <TrackCard
        data={data} 
        imgVariant="trackRowCard"
        isDefault={true}
        isTrack={false}
    />
);
