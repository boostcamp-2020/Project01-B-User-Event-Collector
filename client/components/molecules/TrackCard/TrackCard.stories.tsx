import React from 'react';
import TrackCard from '.';

export default {
    title: 'TrackCard',
    component: TrackCard,
};

const STORY_SRC = 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906';
const TRACKTITLE = 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)';
const ARTIST = '나는가수다';

export const Playlist = () => (
    <TrackCard
        src={STORY_SRC}
        trackTitle={TRACKTITLE}
        artist={ARTIST}
        imgVariant="trackRowCard"
        isDefault={true}
        isTrack={true}
    />
);
export const NowPlaying = () => (
    <TrackCard
        src={STORY_SRC}
        trackTitle={TRACKTITLE}
        artist={ARTIST}
        imgVariant="trackInfo"
        isDefault={false}
        isTrack={true}
    />
);
export const Chart = () => (
    <TrackCard
        src={STORY_SRC}
        trackTitle={TRACKTITLE}
        artist={ARTIST}
        imgVariant="trackRowCard"
        isDefault={true}
        isTrack={false}
    />
);
