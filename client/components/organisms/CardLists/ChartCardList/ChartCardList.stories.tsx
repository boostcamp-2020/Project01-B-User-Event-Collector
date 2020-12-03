import { ChartCardProps } from '@interfaces/props';
import React from 'react';
import ChartCardList from './ChartCardList';

export default {
    title: 'Organisms/ChartCardList',
    conponent: ChartCardList,
};
let i = 1;
const ChartCards: ChartCardProps[] = Array(30).fill({
    src: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
    rank: i++,
    artist: '방탄소년단',
    trackTitle: 'dynamite',
});
export const Default = () => <ChartCardList items={ChartCards} unit={5} />;
