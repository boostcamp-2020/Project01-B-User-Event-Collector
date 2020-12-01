import React from "react";
import CardScrollList from "./CardScrollList"
import { MagazineSort } from '@interfaces/props';

export default {
  title: "CardScrollList",
  component: CardScrollList,
}


const Magazinesdata = Array(9).fill({
    src: "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906",
    href: "localhost:3000",
    title: `이 주의 디깅 #77 
    이영지 새 앨범 발표`,
    date: "2020.11.25",
    sort: MagazineSort.main,
});

const Newsdata = Array(9).fill({
    src: "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906",
    href: "localhost:3000",
    title: `이영지가 새 앨범을 발표했습니다`,
});

export const Magazine = () => <CardScrollList type="magazine" items={Magazinesdata}/>
export const News = () => <CardScrollList type="news" items={Newsdata}/>