import React from "react";
import HeaderSideBar from "./HeaderSideBar"

export default {
  title: "HeaderSideBar",
  component: HeaderSideBar,
}

export const LoggedIn = () => <HeaderSideBar user={{ id: '1234', name: 'User' }}/>

export const NotLoggedIn = () => <HeaderSideBar/>