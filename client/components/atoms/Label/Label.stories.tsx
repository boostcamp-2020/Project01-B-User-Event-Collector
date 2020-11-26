import React from "react";
import Label from "./Label"

export default {
  title: "Label",
  component: Label,
}

const STORY_CHILDREN = "Label"
const STORY_SPECIAL_CHILDREN = "Special"

export const Special = () => <Label selected = {true} variant = "special">{STORY_SPECIAL_CHILDREN}</Label>

export const Primary = () => <Label selected = {true} variant = "primary">{STORY_CHILDREN}</Label>

export const Secondary = () => <Label selected = {true} variant = "secondary">{STORY_CHILDREN}</Label>

export const Default = () => <Label selected = {true} >{STORY_CHILDREN}</Label>