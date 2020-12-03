import React from 'react';
import PlayerTrackCard from '.';

export default {
    title: 'Organisms/PlayerTrackCard',
    component: PlayerTrackCard,
};

const STORY_SRC = 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906';
const TRACKTITLE = 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)';
const ARTIST = '나는가수다';
export const Default = () => <PlayerTrackCard src={STORY_SRC} trackTitle={TRACKTITLE} artist={ARTIST} />;
