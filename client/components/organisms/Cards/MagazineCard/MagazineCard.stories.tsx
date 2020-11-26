import React from "react";
import MagazineCard from "./MagazineCard"

export default {
  title: "MagazineCard",
  component: MagazineCard,
}

const STORY_SRC = "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906";
const STORY_HREF = "localhost:3000";
const STORY_SORT = ['mainMagazine', 'normalMagazine'];
const STORY_TITLE = 
`이 주의 디깅 #77 
이영지 새 앨범 발표`;
const STORY_DATE = "2020.11.25";

export const MainMagazine = () => <MagazineCard title = {STORY_TITLE} date = {STORY_DATE} src = {STORY_SRC} href = {STORY_HREF} sort = {STORY_SORT[0]} />

export const NormalMagazine = () => <MagazineCard title = {STORY_TITLE} date = {STORY_DATE} src = {STORY_SRC} href = {STORY_HREF} sort = {STORY_SORT[1]} />