import React from "react";
import GenreCard from "./GenreCard"

export default {
  title: "GenreCard",
  component: GenreCard,
}

const STORY_GENRE_TITLE = ["K-POP", "해외 힙합"];
const STORY_HREF = "localhost:3000";

export const Default = () => <GenreCard color = "pink" title = {STORY_GENRE_TITLE[0]} href = {STORY_HREF} />

export const Selected = () => <GenreCard color = "black" title = {STORY_GENRE_TITLE[1]} href = {STORY_HREF} />