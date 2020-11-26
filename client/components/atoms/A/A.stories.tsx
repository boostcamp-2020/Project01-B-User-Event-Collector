import React from "react";
import A from "./A"

export default {
  title: "A",
  component: A,
}

const STORY_HREF = "localhost:3000";
const STORY_TEXT = "테스트 메세지 입니다. TEST MESSAGE";

export const Default = () => <A href={STORY_HREF}>{STORY_TEXT}</A>

export const Primary = () => <A variant = "primary" href={STORY_HREF}>{STORY_TEXT}</A>

export const Secondary = () => <A variant = "secondary" href={STORY_HREF}>{STORY_TEXT}</A>

export const Tertiary = () => <A variant = "tertiary" href={STORY_HREF}>{STORY_TEXT}</A>