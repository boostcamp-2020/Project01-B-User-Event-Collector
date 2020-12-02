import React from 'react';
import ChartCard from './ChartCard';

export default {
    title: 'Molecules/ChartCard',
    component: ChartCard,
};

const STORY_SRC = 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906';
const STORY_RANK = '1';
const STORY_ARTIST = '방탄소년단';
const STORY_TRACKTITLE = 'Dynamite';
export const Default = () => (
    <ChartCard src={STORY_SRC} rank={STORY_RANK} artist={STORY_ARTIST} trackTitle={STORY_TRACKTITLE} />
);
