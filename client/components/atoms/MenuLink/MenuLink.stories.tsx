import React from "react";
import MenuLink from "./MenuLink"

export default {
  title: "MenuLink",
  component: MenuLink,
}

const STORY_BUTTON_TEXT = "메뉴 이름";
const STORY_HREF = "localhost:3000";

export const Default = () => <MenuLink href = {STORY_HREF}>{STORY_BUTTON_TEXT}</MenuLink>

export const Selected = () => <MenuLink selected = {true} href = {STORY_HREF}>{STORY_BUTTON_TEXT}</MenuLink>