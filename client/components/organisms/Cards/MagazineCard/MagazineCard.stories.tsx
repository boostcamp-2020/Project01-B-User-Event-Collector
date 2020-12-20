import React from 'react';
import MagazineCard from './MagazineCard';

export default {
    title: 'Organisms/MagazineCard',
    component: MagazineCard,
};

const Magazinedata =
{
    id: 1,
    title: "나만 없어 그 한정판\nLP 레코드",
    imageUrl: "https://music-phinf.pstatic.net/20201116_25/1605515795782Xy0Kf_JPEG/0-%B4%EB%C7%A5%C0%CC%B9%CC%C1%F6-%C1%A4%B9%E6%C7%FC_11.jpg?type=w720",
    date: "2020-11-19",
    category: "gerne"
}

export const TodayMagazine = () => (
    <MagazineCard {...(Magazinedata)} />
);
