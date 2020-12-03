import React from 'react';
import TrackRowList from './index';

export default {
    title: 'Organisms/TrackRowList',
    component: TrackRowList,
};
const TrackDatas = Array(20).fill({
    albumImgSrc: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    trackId: '1',
    trackTitle: 'VVS (Feat. JUSTHIS) (Prod. GroovyRoom)',
    artist: '미란이',
    albumTitle: '쇼미더머니 9 Episode 1',
});
export const Default = () => <TrackRowList items={TrackDatas} />;
