import { ChartCardProps } from '@interfaces/props';
import React from 'react';
import ChartCardList from '.';

export default {
    title: 'Organisms/ChartCardList',
    conponent: ChartCardList,
};
let i = 1;
const ChartCards: ChartCardProps[] = Array(30).fill({
        id: 5,
        rank: 1,
        title: '그냥',
        album: {
            id: 0,
            imageUrl: 'https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906',
        },
        artist: {
            id: 0,
            name: '이영지',
        }
});
export const Default = () => <ChartCardList items={ChartCards} unit={5} />;
