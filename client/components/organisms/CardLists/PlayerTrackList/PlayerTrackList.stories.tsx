import React from 'react';
import PlayerTrackList from './index';

export default {
    title: 'Organisms/PlayerTrackList',
    component: PlayerTrackList,
};

const PlayerTrackCardDatas = Array(20).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    trackTitle: 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',
    artist: '나는가수다',
});
export const Default = <PlayerTrackList items={PlayerTrackCardDatas} />;
