import React from 'react';
import TrackInfo from '.';

export default {
    title: 'TrackInfo',
    component: TrackInfo,
};
const TRACKTITLE = 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)';
const ARTIST = '나는가수다';
export const Default = () => <TrackInfo trackTitle={TRACKTITLE} artist={ARTIST} />;
