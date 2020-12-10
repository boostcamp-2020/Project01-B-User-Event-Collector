import React from 'react';
import ChartCard from './ChartCard';
import { ChartCardProps } from '@interfaces/props';

export default {
    title: 'Molecules/ChartCard',
    component: ChartCard,
};

const item = 
{
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
}

export const Default = () => (
    <ChartCard key = { item.id } {...(item as ChartCardProps)} />
);
