import React from "react";
import LibraryArtistThumbnail from "./LibraryArtistThumbnail"

export default {
  title: "LibraryArtistThumbnail",
  component: LibraryArtistThumbnail,
}

const STORY_LibraryArtistThumbnail_SRC = "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906";
const STORY_ARTIST_NAME = "이영지";
const STORY_HREF = 'localhost:3000';

export const Default = () => <LibraryArtistThumbnail href = {STORY_HREF} name = {STORY_ARTIST_NAME} src = {STORY_LibraryArtistThumbnail_SRC}/>