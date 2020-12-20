import React from 'react';
import HeaderSideBar from '.';

export default {
    title: 'Organisms/HeaderSideBar',
    component: HeaderSideBar,
};

export const LoggedIn = () => <HeaderSideBar user={{ id: 10, name: 'User', isLoggedIn:true, profileUrl:"https://musicmeta-phinf.pstatic.net/album/003/399/3399784.jpg" }} />;

export const NotLoggedIn = () => <HeaderSideBar user={{ id: 10, name: 'User', isLoggedIn:true, profileUrl:"https://musicmeta-phinf.pstatic.net/album/003/399/3399784.jpg" }}/>;
