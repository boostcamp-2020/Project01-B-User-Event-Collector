import React from "react";
import LibraryHeader from "./LibraryHeader"

export default {
  title: "LibraryHeader",
  component: LibraryHeader,
}

const STORY_SORT = ['mixtape', 'track', 'artist', 'album', 'playlist'];

export const Mixtape = () => <LibraryHeader sort = {STORY_SORT[0]}/>
export const Track = () => <LibraryHeader sort = {STORY_SORT[1]}/>
export const Artist = () => <LibraryHeader sort = {STORY_SORT[2]}/>
export const Album = () => <LibraryHeader sort = {STORY_SORT[3]}/>
export const Playlist = () => <LibraryHeader sort = {STORY_SORT[4]}/>