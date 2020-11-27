import React from "react";
import UserProfileMenu from "./UserProfileMenu"

export default {
  title: "UserProfileMenu",
  component: UserProfileMenu,
}

export const LoggedIn = () => 
<div style={{width: '250px'}}>
  <UserProfileMenu user={{
      id: '1234',
      name: 'User',
  }}/>
</div>


export const NotLoggedIn = () => <UserProfileMenu />


