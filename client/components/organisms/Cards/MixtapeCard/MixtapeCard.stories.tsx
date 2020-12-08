import React from 'react';
import MixtapeCard from './MixtapeCard';

export default {
    title: 'Organisms/MixtapeCard',
    component: MixtapeCard,
};

const Mixtapedata = {
    id: 1,
    title: "나를 위한 믹스테잎",
    subTitle: "",
    description: "Lana Del Rey, Dua Lipa, 이영지",
    imageUrl: "https://vibeapp.music.naver.com/vibe/v1/cover/mix/3171155,2487724,3553414,635724/favorite/favorite/",
    customized: false
};

export const Default = () => (
    <MixtapeCard {...(Mixtapedata)} />
);
