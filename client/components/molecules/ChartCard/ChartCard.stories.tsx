import React from 'react';
import ChartCard from './ChartCard';

export default {
    title: 'ChartCard',
    component: ChartCard,
};

const STORY_SRC = 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906';
const STORY_RANK = '1';
const STORY_SINGER = '방탄소년단';
const STORY_SONGTITLE = 'Dynamite';
export const Default = () => (
    <ChartCard src={STORY_SRC} rank={STORY_RANK} singer={STORY_SINGER} songTitle={STORY_SONGTITLE} />
);
