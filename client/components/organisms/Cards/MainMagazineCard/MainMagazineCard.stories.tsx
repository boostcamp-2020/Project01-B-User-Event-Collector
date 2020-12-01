import React from "react";
import MainMagazineCard from "./MainMagazineCard"

export default {
  title: "MainMagazineCard",
  component: MainMagazineCard,
}

const STORY_SRC = "https://music-phinf.pstatic.net/20201119_255/1605768990292DkTAH_JPEG/%B4%EB%C7%A5-%C0%CC%B9%CC%C1%F61.jpg?type=w720";
const STORY_HREF = "localhost:3000";

const STORY_TITLE = "차트를 달리는 래퍼 : 잭 할로우, 물라토";
const STORY_DESCRIPTION = "아직 한 달 남짓한 시간이 남았지만, 2020년 역시 힙합의 해라고 해도 과언이 아니지 않을까? 신인을 비롯한 수많은 힙합 아티스트들이 빌보드 HOT 차트 상위권을 거쳐가며 인기를 끌었기 때문이다. 그런데 최근 힙합을 잘 챙겨 듣지 않은 이들에게는 신인의 이름이 낯설 수도 있다. 올해가 가기 전 이름을 알아 두면 좋을 일곱 명의 래퍼를 확인해보자. - 힙합엘이";
const STORY_LABEL = "GENRE";

export const TodayMagazine = () => <MainMagazineCard title = {STORY_TITLE} description = {STORY_DESCRIPTION} src = {STORY_SRC} href = {STORY_HREF} label = {STORY_LABEL} />