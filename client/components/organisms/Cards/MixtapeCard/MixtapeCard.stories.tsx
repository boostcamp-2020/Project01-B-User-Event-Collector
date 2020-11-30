import React from "react";
import MixtapeCard from "./MixtapeCard"

export default {
  title: "MixtapeCard",
  component: MixtapeCard,
}

const STORY_SRC = "https://vibeapp.music.naver.com/vibe/v1/cover/mix/2487724,3553414,2836707,4551646/favorite/favorite/";
const STORY_HREF = "localhost:3000";

const STORY_TITLE = '최애 믹스테잎';
const STORY_ARTIST = "김승민, Ariana Grande, 이영지, Dua Lipa, Lana Del Rey";

export const Default = () => <MixtapeCard title = {STORY_TITLE} artist = {STORY_ARTIST} src = {STORY_SRC} href = {STORY_HREF} />