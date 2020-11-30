import React from "react";
import PlaylistCard from "./PlaylistCard"

export default {
  title: "PlaylistCard",
  component: PlaylistCard,
}

const STORY_SRC = "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=f674_674_repre3&v=2020113005";
const STORY_HREF = "localhost:3000";

const STORY_TITLE = '이영지 대표곡';
const STORY_DESCRIPTION = "VIBE";

export const Default = () => <PlaylistCard title = {STORY_TITLE} description = {STORY_DESCRIPTION} src = {STORY_SRC} href = {STORY_HREF} />