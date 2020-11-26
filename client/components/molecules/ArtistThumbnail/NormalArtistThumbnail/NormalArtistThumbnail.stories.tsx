import React from "react";
import NormalArtistThumbnail from "./NormalArtistThumbnail"

export default {
  title: "NormalArtistThumbnail",
  component: NormalArtistThumbnail,
}

const STORY_NormalArtistThumbnail_SRC = "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906";
const STORY_ARTIST_NAME = "이영지";

export const Default = () => <NormalArtistThumbnail  name = {STORY_ARTIST_NAME} src = {STORY_NormalArtistThumbnail_SRC}/>