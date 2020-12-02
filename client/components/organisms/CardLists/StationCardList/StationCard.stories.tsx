import React from 'react';
import StationCardList from './StationCardList';

export default {
    title: 'Organisms/StationCardList',
    component: StationCardList,
};

const StationCards = Array(20).fill({
    src: 'https://music-phinf.pstatic.net/20181204_11/1543918826895DFvFt_PNG/mood_3_Happy.png?type=f360',
    href: '#',
    sort: '',
});

export const Default = () => <StationCardList items={StationCards} />;
