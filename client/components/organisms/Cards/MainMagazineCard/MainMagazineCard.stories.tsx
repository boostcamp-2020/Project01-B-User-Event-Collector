import React from 'react';
import MainMagazineCard from './MainMagazineCard';

export default {
    title: 'Organisms/MainMagazineCard',
    component: MainMagazineCard,
};

const mainMagazineData = 
{
    id: 0,
    imageUrl: "https://music-phinf.pstatic.net/20201119_255/1605768990292DkTAH_JPEG/%B4%EB%C7%A5-%C0%CC%B9%CC%C1%F61.jpg?type=w720",
    title: "차트를 달리는 래퍼 : 잭 할로우, 물라토",
    description: "아직 한 달 남짓한 시간이 남았지만, 2020년 역시 힙합의 해라고 해도 과언이 아니지 않을까? 신인을 비롯한 수많은 힙합 아티스트들이 빌보드 HOT 차트 상위권을 거쳐가며 인기를 끌었기 때문이다. 그런데 최근 힙합을 잘 챙겨 듣지 않은 이들에게는 신인의 이름이 낯설 수도 있다. 올해가 가기 전 이름을 알아 두면 좋을 일곱 명의 래퍼를 확인해보자. - 힙합엘이",
    date: "2020-11-19",
    category: "gerne"
}

export const TodayMagazine = () => (
    <MainMagazineCard {...mainMagazineData} />
);
