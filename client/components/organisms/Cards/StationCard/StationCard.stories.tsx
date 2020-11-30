import React from "react";
import StationCard from "./StationCard"

export default {
  title: "StationCard",
  component: StationCard,
}

const STORY_SRC = "https://music-phinf.pstatic.net/20181204_11/1543918826895DFvFt_PNG/mood_3_Happy.png?type=f360";

export const Default = () => <StationCard src = {STORY_SRC} />