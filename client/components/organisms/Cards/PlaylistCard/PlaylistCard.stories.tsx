import React from 'react';
import PlaylistCard from './PlaylistCard';

export default {
    title: 'Organisms/PlaylistCard',
    component: PlaylistCard,
};

const playlistData =
{
    id: 1,
    title: "VIBE AND CHILL",
    subTitle: "",
    description: "VIBE",
    imageUrl: "https://music-phinf.pstatic.net/20200504_183/1588567824216rHHs6_PNG/VIBE_%B0%F8%C5%EB_VibeAndChill.png",
    customized: false
}

export const Default = () => (
    <PlaylistCard {...(playlistData)} />
);
