import React from "react"
import { Image } from "./Image"

export default {
  title: "Image",
  component: Image,
}

const STORY_IMAGE_SRC = "https://musicmeta-phinf.pstatic.net/artist/002/826/2826154.jpg?type=ff300_300&v=20191231151906";

export const Default = () => <Image src = {STORY_IMAGE_SRC}/>

export const Primary = () => <Image variant = "" src = {STORY_IMAGE_SRC}/>

export const NormalMagazine = () => <Image variant = "normalMagazine" src = {STORY_IMAGE_SRC}/>

export const News = () => <Image variant = "news" src = {STORY_IMAGE_SRC}/>

export const TrackRowCard = () => <Image variant = "trackRowCard" src = {STORY_IMAGE_SRC}/>

export const TrackInfo = () => <Image variant = "trackInfo" src = {STORY_IMAGE_SRC}/>

export const SmallArtistImage = () => <Image variant = "smallArtistImage" src = {STORY_IMAGE_SRC}/>

export const RegularArtistImage = () => <Image variant = "regularArtistImage" src = {STORY_IMAGE_SRC}/>

export const LargeArtistImage = () => <Image variant = "largeArtistImage" src = {STORY_IMAGE_SRC}/>