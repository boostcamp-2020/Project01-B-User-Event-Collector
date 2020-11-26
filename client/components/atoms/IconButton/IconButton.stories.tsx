import React from "react";
import IconButton from "./IconButton";
import CloseIcon from '@material-ui/icons/Close';
import SearchIcon from '@material-ui/icons/Search';

export default {
  title: "IconButton",
  component: IconButton,
}

const STORY_IconButton_TEXT = "IconButton";
export const PlainGreyRegular = () => <IconButton icon = {CloseIcon} variant = "plainGreyRegular" />

export const PlainGreySmall = () => <IconButton icon = {CloseIcon} variant = "plainGreySmall" />

export const PlainWhiteRegular = () => <IconButton icon = {CloseIcon} variant = "plainWhiteRegular" />

export const PlainBlackRegular = () => <IconButton icon = {CloseIcon} variant = "plainBlackRegular" />